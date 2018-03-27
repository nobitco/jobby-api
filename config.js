'use strict'

const debug = require('debug')('platziverse:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'jobby',
    username: process.env.DB_USER || 'admjobby',
    password: process.env.DB_PASS || '12345',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: s => debug(s)
  }
}
