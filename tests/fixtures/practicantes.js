'use strict'

const faker = require('faker')

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const practicante = {
  id: 1,
  nombres: faker.name.firstName(),
  apellidos: faker.name.lastName(),
  email: faker.internet.email(),
  telefono: faker.phone.phoneNumber()
}

// generamos un arreglo con N practicantes
let practicanterm = {}
let practicantes = []

practicantes.push(practicante)

let nTotal = getRandomInt(5, 30)

for (let i = 2; i <= nTotal; i++) {
  practicanterm = {
    id: i,
    nombres: faker.name.firstName(),
    apellidos: faker.name.lastName(),
    email: faker.internet.email(),
    telefono: faker.phone.phoneNumber()
  }
  practicantes.push(practicanterm)
}

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

var hoy = Date.now()

var fechaEntrega1 = new Date(2018, 0, 30)
var transcurrido = hoy - fechaEntrega1
var diasVencido1 = Math.trunc(transcurrido / 86400000)

const entregaVencida1 = {
  nombre: 'actividad 20',
  fechaEntrega: fechaEntrega1.toDateString(),
  diasVencidos: diasVencido1
}

var fechaEntrega2 = new Date(2018, 1, 15)
transcurrido = hoy - fechaEntrega2
var diasVencido2 = Math.trunc(transcurrido / 86400000)

var fechaEntrega3 = new Date(2018, 2, 5)
transcurrido = hoy - fechaEntrega3
var diasVencido3 = Math.trunc(transcurrido / 86400000)

const entregasVencidas = [
  entregaVencida1,
  extend(entregaVencida1, { nombre: 'actividad 10', fechaEntrega: fechaEntrega2.toDateString(), diasVencidos: diasVencido2 }),
  extend(entregaVencida1, { nombre: 'actividad 50', fechaEntrega: fechaEntrega3.toDateString(), diasVencidos: diasVencido3 })
]

function extend (obj, values) {
  const clone = Object.assign({}, obj)

  return Object.assign(clone, values)
}

module.exports = {
  single: practicante,
  all: practicantes,
  entrega: entrega,
  entregas: entregas,
  entregaVencida: entregaVencida1,
  entregasVencidas: entregasVencidas
}
