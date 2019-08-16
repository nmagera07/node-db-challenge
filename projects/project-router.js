const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

router.get('/projects', async (req, res) => {
    const body = req.body
    
    
    try {
        const projects = await Projects.getProjects()
        const newProjects = projects.map(p => {
            return {id: p.id, project_name: p.project_name, project_description: p.project_description, completed: 'false'}
        })
        

        res.json(newProjects)
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

router.get('/projects/tasks', async (req, res) => {
    try {
        const tasks = await Projects.getTasks()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get list of tasks for projects'})
    }
})

router.post('/projects', async ( req,res ) => {
    const body = req.body

    console.log(body.completed)
    
    try {
        const project = await Projects.addProject(body)
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({ message: 'Could not add project.'})
    }
})

router.post('/resources', async ( req,res ) => {
    const body = req.body

    try {
        const resource = await Projects.addResource(body)
        res.status(201).json(resource)
    } catch (error) {
        res.status(500).json({ message: 'Could not add resource.'})
    }
})

router.post('/projects/tasks', async ( req,res ) => {
    const body = req.body
    
    try {
        const task = await Projects.addTask(body)
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ message: 'Could not add task.'})
    }
})


module.exports = router