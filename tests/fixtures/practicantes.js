'use strict'

const faker = require('faker')

const practicante = {
  id: 1,
  nombres: faker.name.firstName(),
  apellidos: faker.name.lastName(),
  email: faker.internet.email(),
  telefono: faker.phone.phoneNumber()
}

const practicantes = [
  practicante,
  extend(practicante, { id: 2, nombres: faker.name.firstName(), apellidos: faker.name.lastName(), email: faker.internet.email() }),
  extend(practicante, { id: 3, nombres: faker.name.firstName(), apellidos: faker.name.lastName(), email: faker.internet.email() }),
  extend(practicante, { id: 4, nombres: faker.name.firstName(), apellidos: faker.name.lastName(), email: faker.internet.email() })
]

function extend (obj, values) {
  const clone = Object.assign({}, obj)

  return Object.assign(clone, values)
}

module.exports = {
  single: practicante,
  all: practicantes
}
