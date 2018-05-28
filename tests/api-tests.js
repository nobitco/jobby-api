'use strict'

const test = require('ava')
const request = require('supertest')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

const userFixtures = require('./fixtures/users')
const config = require('../config')

let sandbox = null
let server = null
let dbStub = null
let UserStub = {}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()

  dbStub = sandbox.stub()
  dbStub.returns(Promise.resolve({
    User: UserStub
  }))

  // create stub to each databases function
  UserStub.findAll = sandbox.stub()
  UserStub.findAll.returns(Promise.resolve(userFixtures.all))
  UserStub.findByUsername = sandbox.stub()
  UserStub.findByUsername.returns(Promise.resolve(userFixtures.single))

  const api = proxyquire('../api', {
    'jobby-bdsql': dbStub
  })

  server = proxyquire('../server', {
    './api': api
  })
})

test.afterEach(() => {
  sandbox && sinon.restore()
})

test.serial.cb('/api/users', t => {
  request(server)
    .get('/api/users')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.falsy(err, 'should not return an error')
      let body = JSON.stringify(res.body)
      let expected = JSON.stringify(userFixtures.all)
      t.deepEqual(body, expected, 'response body should be the expected')
      t.end()
    })
})

test.serial.cb('/api/user/:username', t => {
  request(server)
    .get('/api/user/:username')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.falsy(err, 'should not return error')
      let body = JSON.stringify(res.body)
      let expected = JSON.stringify(userFixtures.single)
      t.deepEqual(body, expected, 'response body should be the expected')
      t.end()
    })
})

test.serial.todo('/api/users - not authorized')
