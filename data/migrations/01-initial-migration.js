/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', table => {
        table.increments("project_id")
        table.string('project_name', 200).notNullable().unique()
        table.string('project_description', 400)
        table.integer('project_completed').defaultTo(0)
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name', 200).notNullable().unique()
        table.string('resource_description', 400)
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description', 400)
        table.string('task_notes', 500)
        table.integer('task_completed').defaultTo(0)
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
        table.integer('resource_id')
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  
};
