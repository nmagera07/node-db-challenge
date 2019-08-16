const db = require('../data/db-config')

function getProjects() {
    return db('projects')
}

function getResources() {
    return db('resources')
}

function getTasks() {
    return db('tasks')
        .innerJoin('project_tasks_resources', 'tasks.id', 'project_tasks_resources.tasks_id')
        .innerJoin('projects', 'project_tasks_resources.project_id', 'projects.id')
        .select('projects.name', 'projects.project_description', 'tasks.task_description', 'tasks.completed')
}

function addProject(project) {
    return db('projects')
        .insert(project)
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function addTask(task) {
    return db('tasks')
        .insert(task)
}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,

}