
exports.seed = function(knex) {
      return knex('tasks').insert([
        { task_description: 'task1', notes: 'task1 notes', completed: false},
        { task_description: 'task2', notes: 'task2 notes', completed: false},
        { task_description: 'task3', notes: 'task3 notes', completed: false},
        { task_description: 'task4', notes: '', completed: true},
      ]);
};
