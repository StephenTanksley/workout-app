exports.up = async function(knex) {
    await knex.schema.createTable('sets', (table) => {
        table.increments('id').primary()
        table.integer('exercise_id').notNullable()
            .references('id')
            .inTable('exercises')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.string('band_color')
        table.integer('weight')
        table.integer('reps')
        table.string('notes', 512)
        table.boolean('skipped')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('sets')
};
