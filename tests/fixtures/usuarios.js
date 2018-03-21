'use strict'

const faker = require('faker/locale/es')

const usuario = {
  id: 1,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  lastAccess: faker.date.past()
}

const usuarios = [
  usuario,
  extend(usuario, { id: 2, username: faker.internet.userName(), email: faker.internet.email(), password: faker.internet.password(), lastAccess: faker.date.past() }),
  extend(usuario, { id: 3, username: faker.internet.userName(), email: faker.internet.email(), password: faker.internet.password(), lastAccess: faker.date.past() }),
  extend(usuario, { id: 4, username: faker.internet.userName(), email: faker.internet.email(), password: faker.internet.password(), lastAccess: faker.date.past() })
]

function extend (obj, values) {
  const clone = Object.assign({}, obj)

  return Object.assign(clone, values)
}

module.exports = {
  single: usuario,
  all: usuarios
}
