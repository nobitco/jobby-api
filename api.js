'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')

const api = express.Router()
const practicantesFixtures = require('./tests/fixtures/practicantes')
const usuariosFixtures = require('./tests/fixtures/usuarios')

api.get('/practicantes', (req, res) => {
  debug('get practicantes')
  res.send(JSON.stringify(practicantesFixtures.all))
})

api.get('/usuario', (req, res) => {
  debug('GET usuario')
  res.send(JSON.stringify(usuariosFixtures.single))
})

api.get('/entregas-proximas', (req, res) => {
  debug('GET entregas')
  res.send(JSON.stringify(practicantesFixtures.entregas))
})

api.get('/entregas-vencidas', (req, res) => {
  debug('GET entregas')
  res.send(JSON.stringify(practicantesFixtures.entregasVencidas))
})

module.exports = api
