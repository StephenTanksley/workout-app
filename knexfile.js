// Update with your config settings.

const sqlite = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds"
  },
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  }
}

module.exports = {
  dev: {
    ...sqlite,
    connection: {
      filename: './dev.sqlite3'
    }
  },

  test: {
    ...sqlite,
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'pg',
    migrations: {
      directory: "./data/migrations",
      },
    seeds: {
      directory: "./data/seeds"
      },
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
      },
  }
}
