'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')

const api = express.Router()
const novicesFixtures = require('./tests/fixtures/novices')
const usuariosFixtures = require('./tests/fixtures/usuarios')
const assignmentsFixtures = require('./tests/fixtures/assignments')

api.get('/students', (req, res) => {
  debug('get students')
  res.send(JSON.stringify(novicesFixtures.all))
})

api.get('/usuario', (req, res) => {
  debug('GET usuario')
  res.send(JSON.stringify(usuariosFixtures.single))
})

api.get('/next-assignments', (req, res) => {
  debug('GET next-assignments')
  res.append('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify(assignmentsFixtures.nextAssignments))
})

api.get('/expired-assignments', (req, res) => {
  debug('GET expired-assignments')
  res.append('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify(assignmentsFixtures.expiredAssignments))
})

module.exports = api
