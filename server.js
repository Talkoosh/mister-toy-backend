const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const expressSession = require('express-session')

const app = express();
const http = require('http').createServer(app)

app.use(bodyParser.json());

const session = expressSession({
    secret: 'olaiklelaike109xyZ',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

app.use(express.json())
app.use(express.static('public'));
app.use(session)


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

const toyRoutes = require('./api/toy/toy.routes.js')
const authRoutes = require('./api/auth/auth.routes.js');
const userRoutes = require('./api/user/user.routes.js')
const reviewRoutes = require('./api/review/review.routes')

const setupAsyncLocalStorage = require('./middlewares/setAls.middleware')
app.all('*', setupAsyncLocalStorage)

app.use('/api/toy', toyRoutes);
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)



app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030;

http.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})
