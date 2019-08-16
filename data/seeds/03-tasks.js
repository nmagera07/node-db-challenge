
exports.seed = function(knex) {
      return knex('tasks').insert([
        { project_id: '1', task_description: 'task1', notes: 'task1 notes', completed: 'false'},
        { project_id: '2', task_description: 'task2', notes: 'task2 notes', completed: 'false'},
        { project_id: '3', task_description: 'task3', notes: 'task3 notes', completed: 'false'},
        { project_id: '3', task_description: 'task4', notes: '', completed: 'true'},
      ]);
};
