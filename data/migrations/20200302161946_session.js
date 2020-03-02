exports.up = async function(knex) {
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
};

exports.down = async function(knex) {
  
};
