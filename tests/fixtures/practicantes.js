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

var fecha1 = new Date(faker.date.future())
var fecha2 = new Date(faker.date.future())
var fecha3 = new Date(faker.date.future())
var fecha4 = new Date(faker.date.future())

const entrega = {
  id: 1,
  nombre: 'informe a',
  fechaEntrega: fecha1.toDateString()
}

const entregas = [
  entrega,
  extend(entrega, { id: 2, nombre: 'actividad b', fechaEntrega: fecha2.toDateString() }),
  extend(entrega, { id: 3, nombre: 'actividad c', fechaEntrega: fecha3.toDateString() }),
  extend(entrega, { id: 4, nombre: 'actividad d', fechaEntrega: fecha4.toDateString() })
]

function extend (obj, values) {
  const clone = Object.assign({}, obj)

  return Object.assign(clone, values)
}

module.exports = {
  single: practicante,
  all: practicantes,
  entrega: entrega,
  entregas: entregas
}
