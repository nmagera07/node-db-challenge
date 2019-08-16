exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()

      tbl.string('project_name', 255).notNullable()
      tbl.string('project_description', 255)
      tbl.boolean('completed', false)
  })
  .createTable('resources', tbl => {
      tbl.increments()

      tbl.string('resource_name', 255).notNullable()
      tbl.string('resource_description', 255)
  })
  .createTable('tasks', tbl => {
      tbl.increments()

      tbl.string('task_description', 250).notNullable()
      tbl.string('notes', 5000)
      tbl.boolean('completed', false)
      
  })
  .createTable('project_tasks_resources', tbl => {
      tbl.increments()

      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('tasks_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_tasks_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};