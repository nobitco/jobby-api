'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const db = require('jobby-bdsql')
const config = require('./config')

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

api.get('/user/:username', async (req, res, next) => {
  const { username } = req.params

  debug(`request to /user/${username}`)

  let user
  try {
    user = await User.findByUsername(username)
  } catch (e) {
    return next(e)
  }

  if (!user) {
    return next(new Error(`User not found with username ${username}`))
  }

  res.json(user)
})

module.exports = api
