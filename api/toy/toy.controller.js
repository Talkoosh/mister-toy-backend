const toyService = require('./toy.service.js')

// app.get('/api/toy', (req, res) => {
//     const filterBy = req.body;
//     toyService.query(filterBy)
//         .then(toys => res.send(toys))
//         .catch(() => res.status(401).end())
// })

async function getToys(req, res) {
    try {
        const toys = await toyService.query();
        res.json(toys);
    } catch (err) {
        res.status(500).send('Failed to get toys')
    }
}

// app.get('/api/toy/:toyId', (req,res) => {
//     const id = req.params.toyId;
//     toyService.get(id)
//         .then(toy => res.send(toy))
//         .catch(() => res.status(401).end())
// })

async function getToyById(req, res) {
    try {
        const id = req.params.toyId
        const toy = await toyService.get(id);
        res.json(toy)

    } catch (err) {
        res.status(500).send('Cannot retrieve toy');
    }
}

// app.post('/api/toy', (req, res) => {
//     toyService.post(req.body)
//         .then(toy => res.send(toy))
//         .catch(() => res.status(401).end())
// })

async function addToy(req, res) {
    try {
        const newToy = req.body;
        const postedToy = await toyService.post(newToy);
        res.json(postedToy);
    } catch (err) {
        res.status(500).send('Failed to add toy')
    }
}

// app.put('/api/toy', (req, res) => {
//     toyService.put(req.body)
//         .then(toy => res.send(toy))
//         .catch(() => res.status(401).end())
// })

async function updateToy(req, res) {
    try {
        const toyToUpdate = req.body;
        const updatedToy = await toyService.put(toyToUpdate);
        res.json(updatedToy);
    } catch (err) {
        res.status(500).send('Failed to update toy')
    }
}

// app.delete('/api/toy/:toyId', (req, res) => {
//     const toyId = req.params.toyId; 
//     toyService.remove(toyId)
//         .then(() => res.send())
//         .catch(() => res.status(401).end())
// })

async function removeToy(req, res) {
    try {
        const toyId = req.params.toyId;
        const id = await toyService.remove(toyId);
        res.send(id);
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = {
    getToys,
    getToyById,
    addToy,
    updateToy,
    removeToy
}