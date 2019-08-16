const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

router.get('/projects', async (req, res) => {
    try {
        const projects = await Projects.getProjects()
        res.json(projects)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get list of projects.'})
    }
})

router.get('/resources', async (req, res) => {
    try {
        const resources = await Projects.getResources()
        res.json(resources)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get list of resources.'})
    }
})


module.exports = router