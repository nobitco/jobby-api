'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const db = require('jobby-bdsql')
const config = require('./config')
const multer = require('multer')

const api = asyncify(express.Router())

let services, User

const upload = multer()

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

api.get('/', function (req, res) {
  res.send('Hi! you request GET is easy. API Jobby...!')
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

api.post('/user', upload.array(), async (req, res, next) => {
  let user

  try {
    user = await User.createOrUpdate(req.body)
  } catch (e) {
    return next(e)
  }

  if (!user) {
    return next(new Error(`User not saved with username ${user}`))
  }

  res.json(req.body)
})

api.get('/users', async (req, res, next) => {
  let users

  try {
    users = await User.findAll()
  } catch (e) {
    return next(e)
  }

  if (!users) {
    return next(new Error(`Users not found!`))
  }

  res.append('Access-Control-Allow-Origin', '*')
  res.send(users)
})
module.exports = api
