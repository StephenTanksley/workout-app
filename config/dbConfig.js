const knex = require('knex')
const config = require('../knexfile')

const dbEnv = process.env.NODE_ENV || 'dev'

module.exports = knex(config[dbEnv])