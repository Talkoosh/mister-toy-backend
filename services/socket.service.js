const toyService = require('../api/toy/toy.service')

var gIo = null

function connectSockets(http, session) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        }
    })
    gIo.on('connection', socket => {
        socket.on('disconnect', socket => {
            console.log('Someone disconnected')
        })
        socket.on('chat topic', async topic => {
            if (socket.myTopic === topic) return;
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic
            const toy  = await toyService.get(topic);
            let chat = toy.chat || []
            socket.emit('get chat', chat)
        })
        socket.on('chat newMsg', msg => {
            console.log('Emitting Chat msg', msg);
            // emits to all sockets:
            // gIo.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            (async ()=> {
                const toy = await toyService.get(socket.myTopic)
                if(!toy.chat){
                    toy.chat = [];
                }
                toy.chat.push(msg); 
                toyService.put(toy)
                
            })()

            gIo.to(socket.myTopic).emit('chat addMsg', msg)
        })
        socket.on('set-user-socket', userId => {
            socket.userId = userId
        })
        socket.on('user-typing', async (userFullname) => {
            socket.broadcast.to(socket.myTopic).emit('show-user-typing', userFullname)
        })
        socket.on('finished-typing', () => {
            gIo.to(socket.myTopic).emit('delete-typing-msg', '')
        })
    })
}

function emitTo({ type, data, label }) {
    if (label) gIo.to('watching:' + label).emit(type, data)
    else gIo.emit(type, data)
}

async function emitToUser({ type, data, userId }) {
    const socket = await _getUserSocket(userId)
    if (socket) socket.emit(type, data)
    else {
        console.log('User socket not found');
        _printSockets();
    }
}

// Send to all sockets BUT not the current socket 
async function broadcast({ type, data, room = null, userId }) {
    console.log('BROADCASTING', JSON.stringify(arguments));
    const excludedSocket = await _getUserSocket(userId)
    if (!excludedSocket) {
        // logger.debug('Shouldnt happen, socket not found')
        // _printSockets();
        return;
    }
    if (room) {
        excludedSocket.broadcast.to(room).emit(type, data)
    } else {
        excludedSocket.broadcast.emit(type, data)
    }
}

async function _getUserSocket(userId) {
    const sockets = await _getAllSockets();
    const socket = sockets.find(s => s.userId == userId)
    return socket;
}
async function _getAllSockets() {
    // return all Socket instances
    const sockets = await gIo.fetchSockets();
    return sockets;
}

async function _printSockets() {
    const sockets = await _getAllSockets()
    console.log(`Sockets: (count: ${sockets.length}):`)
    sockets.forEach(_printSocket)
}
function _printSocket(socket) {
    console.log(`Socket - socketId: ${socket.id} userId: ${socket.userId}`)
}

module.exports = {
    connectSockets,
    emitTo,
    emitToUser,
    broadcast,
}