// build your server here and require it from index.js
const express = require('express')

const ResourceRouter = require('./resource/router.js');
const TaskRouter = require('./task/router.js');
const ProjectRouter = require('./project/router.js');

const server = express();

server.use(express.json());
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);
server.use('/api/projects', ProjectRouter);

server.use('*', (req, res, next) => {
    res.json({api: 'up'})
})

module.exports = server;