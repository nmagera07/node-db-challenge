const db = require('../data/db-config')

function getProjects() {
    return db('projects')
}

function getResources() {
    return db('resources')
}




module.exports = {
    getProjects,
    getResources,
    
}