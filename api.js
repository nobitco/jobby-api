'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')

const api = express.Router()
const practicantesFixtures = require('./tests/fixtures/practicantes')

api.get('/practicantes', (req, res) => {
  debug('get practicantes')
  res.send(JSON.stringify(practicantesFixtures.all))
})

module.exports = api
