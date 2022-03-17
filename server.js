const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const session = require('session')
const toyService = require('./services/toyService.js')

const app = express();
const http = require('http').createServer(app)

app.use(express.json())
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    // Express serve static files on production environment
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    // Configuring CORS
    const corsOptions = {
        // Make sure origin contains the url your frontend is running on
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080','http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

// routes

const toyRoutes = require('./api/toy/toy.routes')

app.use('/api/toy', toyRoutes);



app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030;

http.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
})
