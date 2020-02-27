exports.up = async function(knex) {
    await knex.schema.createTable('workouts', (table) => {
        table.increments('id').primary()
        table.string('workout_name')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('workouts')
};
