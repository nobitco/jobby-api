'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')

const api = express.Router()
const practicantesFixtures = require('./tests/fixtures/practicantes')
const usuariosFixtures = require('./tests/fixtures/usuarios')
const assignmentsFixtures = require('./tests/fixtures/assigments')

api.get('/practicantes', (req, res) => {
  debug('get practicantes')
  res.send(JSON.stringify(practicantesFixtures.all))
})

api.get('/usuario', (req, res) => {
  debug('GET usuario')
  res.send(JSON.stringify(usuariosFixtures.single))
})

api.get('/next-assigments', (req, res) => {
  debug('GET next-assigments')
  res.send(JSON.stringify(assignmentsFixtures.nextAssigments))
})

api.get('/expired-assigments', (req, res) => {
  debug('GET expired-assigments')
  res.send(JSON.stringify(assignmentsFixtures.expiredAssigments))
})

module.exports = api
