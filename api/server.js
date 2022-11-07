// build your server here and require it from index.js
const express = require('express')

const ResourceRouter = require('./resource/router.js');
const TaskRouter = require('./task/router.js');

const server = express();

server.use(express.json());
server.use('/api/resource', ResourceRouter);
server.use('/api/task', TaskRouter);

server.use('*', (req, res, next) => {
    res.json({api: 'up'})
})

module.exports = server;