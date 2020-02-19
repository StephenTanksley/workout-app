exports.up = async function(knex) {
    await knex.schema.create('workouts', (table) => {
        table.increments('id').primary()
        table.integer('user_id')
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.string('workout_name')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('workouts')
};
