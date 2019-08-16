
exports.seed = function(knex) {
      return knex('projects').insert([
        { project_name: 'project1', project_description: 'description of project1', completed: 'false'},
        { project_name: 'project2', project_description: 'description of project2', completed: 'false'},
        { project_name: 'project3', project_description: 'description of project3', completed: 'false'},
      ]);
};