
exports.seed = function(knex) {
      return knex('project_tasks_resources').insert([
        { project_id: '1', tasks_id: '1', resources_id: '1' },
        { project_id: '1', tasks_id: '2', resources_id: '2' },
        { project_id: '2', tasks_id: '3', resources_id: '4' },
        { project_id: '2', tasks_id: '4', resources_id: '3'},
        { project_id: '3', tasks_id: '2', resources_id: '6' },
        { project_id: '3', tasks_id: '1', resources_id: '5' },
      ]);
};
