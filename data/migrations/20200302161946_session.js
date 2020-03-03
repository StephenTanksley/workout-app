exports.up = async function(knex) {
    await knex.schema.createTable('session', (table) => {
        table.increments('id').primary()
        table.integer('workout_id').notNullable()
            .references('id')
            .inTable('workouts')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.integer('user_id').notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('session')
};
