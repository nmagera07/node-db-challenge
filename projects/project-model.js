const db = require('../data/db-config')

function getProjects() {
    return db('projects')
}

function getResources() {
    return db('resources')
}

function getTasks() {
    return db('tasks')
        // .innerJoin('project_tasks_resources', 'tasks.id', 'project_tasks_resources.tasks_id')
        .innerJoin('projects', 'tasks.project_id', 'projects.id')
        .select('projects.id','projects.project_name', 'projects.project_description', 'tasks.task_description', 'tasks.completed')
        
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
        // .innerJoin('project_tasks_resources', 'tasks.id', 'project_tasks_resources.tasks_id')
        // .innerJoin('projects', 'project_tasks_resources.project_id', 'projects.id')
        // .select('project_tasks_resources.project_id','projects.project_name', 'projects.project_description', 'tasks.task_description', 'tasks.completed')
        
        
}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,

}