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

var hoy = Date.now()

// generar un arreglo N de objetos entregas
let fechaEntrega
fechaEntrega = new Date(faker.date.future())

var transcurrido = fechaEntrega - hoy
var diasVencimiento = Math.trunc(transcurrido / 86400000) // milisegundos

const entrega = {
  id: 1,
  nombre: 'informe a',
  fechaEntrega: fechaEntrega.toDateString(),
  diasVencimiento: diasVencimiento
}

let entregarm = {}
let entregas = []

entregas.push(entrega)

nTotal = getRandomInt(3, 10)

for (let i = 2; i <= nTotal; i++) {
  fechaEntrega = new Date(faker.date.future())
  transcurrido = fechaEntrega - hoy
  diasVencimiento = Math.trunc(transcurrido / 86400000) // milisegundos

  entregarm = {
    id: i,
    nombre: 'informe a',
    fechaEntrega: fechaEntrega.toDateString(),
    diasVencimiento: diasVencimiento
  }
  entregas.push(entregarm)
}
// ordenar
entregas.sort(function compareNumbers (a, b) {
  if (a.diasVencimiento > b.diasVencimiento) {
    return 1
  }

  if (a.diasVencimiento < b.diasVencimiento) {
    return -1
  }

  return 0
})
// generar entregas vencidas

var fechaVencida = new Date(faker.date.past())
transcurrido = hoy - fechaVencida
var diasVencido = Math.trunc(transcurrido / 86400000) // milisegundos

const entregaVencida = {
  id: 1,
  nombre: 'actividad 20',
  fechaEntrega: fechaVencida.toDateString(),
  diasVencidos: diasVencido
}

let entregasVencidas = []
let entregaVencidarm = {}

entregasVencidas.push(entregaVencida)

nTotal = getRandomInt(3, 10)

for (let i = 2; i <= nTotal; i++) {
  fechaVencida = new Date(faker.date.past())
  transcurrido = hoy - fechaVencida
  diasVencido = Math.trunc(transcurrido / 86400000) // milisegundos

  entregaVencidarm = {
    id: i,
    nombre: 'informe a',
    fechaEntrega: fechaVencida.toDateString(),
    diasVencidos: diasVencido
  }
  entregasVencidas.push(entregaVencidarm)
}

entregasVencidas.sort(function compareNumbers (a, b) {
  if (a.diasVencidos > b.diasVencidos) {
    return -1
  }

  if (a.diasVencidos < b.diasVencidos) {
    return 1
  }

  return 0
})

module.exports = {
  single: practicante,
  all: practicantes,
  entrega: entrega,
  entregas: entregas,
  entregaVencida: entregaVencida,
  entregasVencidas: entregasVencidas
}
