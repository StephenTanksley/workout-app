const bcrypt = require('bcryptjs')
const hash = async (password) => bcrypt.hash(password, 3)

exports.seed = async (knex) => {
  await knex('users').insert([
    {
      username: "testuser1",
      password: `${await hash('testpassword1')}`
    },
    {
      username: "testuser2",
      password: `${await hash('testpassword2')}`
    }
  ])
};
