
exports.up = async function(knex) {
    await knex.schema.createTable('exercises', (table) => {
        table.increments('id').primary()
        table.integer('workout_id').notNullable()
            .references('id')
            .inTable('workouts')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.string('exercise_name').notNullable()
        table.string('exercise_description')
            .notNullable()
        table.string('alternate_description')
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('exercises')
};
