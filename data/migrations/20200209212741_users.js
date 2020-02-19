exports.up = async function(knex) {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('username', 128).notNullable()
        table.string('password').notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('users')
};
