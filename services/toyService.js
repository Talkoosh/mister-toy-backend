const fs = require('fs')

const gToys = require('../data/toy.json')

function query(filterBy){
    let toys = [...gToys]

    if(filterBy.name){
        const regex = new RegExp(filterBy.name, 'i')
        toys = toys.filter(toy => regex.test(toy.name));
    }
    if(filterBy.label){
        toys = toys.filter(toy => toy.labels.includes(filterBy.label));
    }
    return Promise.resolve(toys)
}

function get(id){
    let toy = gToys.find(currToy => currToy._id === id);
    toy = {...toy};
    toy.reviews = ['Bad toy', 'DONT PLAY'];
    return Promise.resolve(toy);
}

function post(toy){
    toy._id = _makeId();
    gToys.push(toy);
    return _saveToysToFile()
            .then(() => toy)
}

function put(toy){
    const idx = gToys.findIndex(currToy => currToy._id === toy._id);
    gToys.splice(idx, 1 , toy);
    return _saveToysToFile()
            .then(() => toy)
}

function remove(id){
    const idx = gToys.findIndex(currToy => currToy._id === id);
    gToys.splice(idx, 1);
    return _saveToysToFile()
            
}

function _saveToysToFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile('data/toy.json', JSON.stringify(gToys, null, 2), (err) => {
            if (err) return reject(err)
            resolve();
        })
    })
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

module.exports = {
    query,
    get,
    post,
    put,
    remove
}