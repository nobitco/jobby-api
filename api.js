'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const db = require('jobby-bdsql')
const config = require('./config')
const practicantesFixtures = require('./tests/fixtures/practicantes')

const api = asyncify(express.Router())

let services, User

api.use('*', async (req, res, next) => {
  if (!services) {
    debug('Connecting to database')
    try {
      services = await db(config.db)
    } catch (e) {
      return next(e)
    }
    User = services.User
  }
  next()
})

api.get('/practicantes', (req, res) => {
  debug('get practicantes')
  //res.send(JSON.stringify(practicantesFixtures.all))
  res.send({})
})

module.exports = api
