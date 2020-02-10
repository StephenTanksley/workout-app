const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const logger = require('../data/middleware/logger');

const authRouter = require('../data/routes/auth/authRouter');
const usersRouter = require('../data/routes/users/usersRouter');

const server = express();
server.use(helmet());
server.use(cors());
server.use(logger());
server.use(express.json());



server.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome to the P90X Workout Log API'
    })
})

server.use((error, req, res, next) => {
    console.log('Error: ', error)
    res.status(500).json({
        message: "Something has gone horribly wrong."
    })
})

module.exports = server;