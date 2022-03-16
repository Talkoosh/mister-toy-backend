const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const toyService = require('./services/toyService.js')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors())

app.get('/api/toy', (req, res) => {
    const filterBy = req.body;
    toyService.query(filterBy)
        .then(toys => res.send(toys))
        .catch(() => res.status(401).end())
})

app.get('/api/toy/:toyId', (req,res) => {
    const id = req.params.toyId;
    toyService.get(id)
        .then(toy => res.send(toy))
        .catch(() => res.status(401).end())

})

app.post('/api/toy', (req, res) => {
    toyService.post(req.body)
        .then(toy => res.send(toy))
        .catch(() => res.status(401).end())
})

app.put('/api/toy', (req, res) => {
    toyService.put(req.body)
        .then(toy => res.send(toy))
        .catch(() => res.status(401).end())
})

app.delete('/api/toy/:toyId', (req, res) => {
    const toyId = req.params.toyId; 
    toyService.remove(toyId)
        .then(() => res.send())
        .catch(() => res.status(401).end())
})

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
})


