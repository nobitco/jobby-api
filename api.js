'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')

const api = express.Router()

api.get('/practicantes', (req, res) => {
  debug('get practicantes')
  res.send({})
})

module.exports = api
