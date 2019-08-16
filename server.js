const express = require('express')

const ProjectsRouter = require('./recipes/recipe-router')

const server = express()

server.use(express.json())
server.use('/api/projects', ProjectsRouter)

module.exports = server