'use strict'

const faker = require('faker')

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

var roles = ['practicante', 'tutor', 'jefe']
var idRole
var today = Date.now()

// generate a array N assignments objects

let deliveryDate
deliveryDate = new Date(faker.date.future())

var deliveryTime = deliveryDate - today
var deliveryDays = Math.trunc(deliveryTime / 86400000) // milisegundos

idRole = getRandomInt(0, 3)

const assignment = {
  id: 1,
  username: faker.internet.userName(),
  role: roles[idRole],
  avatar: faker.image.avatar(),
  name: 'informe a',
  deliveryDate: deliveryDate.toDateString(),
  deliveryDays: deliveryDays
}

let assignmentrm = {}
let nextAssignments = []

nextAssignments.push(assignment)

let nTotal = getRandomInt(15, 80)

for (let i = 2; i <= nTotal; i++) {
  deliveryDate = new Date(faker.date.future())
  deliveryTime = deliveryDate - today
  deliveryDays = Math.trunc(deliveryTime / 86400000) // milisegundos
  idRole = getRandomInt(0, 3)

  assignmentrm = {
    id: i,
    username: faker.internet.userName(),
    role: roles[idRole],
    avatar: faker.image.avatar(),
    name: 'Activity ' + faker.random.word(),
    deliveryDate: deliveryDate.toDateString(),
    deliveryDays: deliveryDays
  }
  nextAssignments.push(assignmentrm)
}
// ordenar
nextAssignments.sort(function compareNumbers (a, b) {
  if (a.deliveryDays > b.deliveryDays) {
    return 1
  }

  if (a.deliveryDays < b.deliveryDays) {
    return -1
  }

  return 0
})

// generate array N objects expired assignments

var expiredDate = new Date(faker.date.past())
let expiredTime = today - expiredDate
var expiredDays = Math.trunc(expiredTime / 86400000) // milisegundos

const expiredAssignment = {
  id: 1,
  username: faker.internet.userName(),
  role: roles[idRole],
  avatar: faker.image.avatar(),
  name: 'Activity ' + faker.random.word(),
  expiredDate: expiredDate.toDateString(),
  expiredDays: expiredDays
}

let expiredAssignments = []
let expiredAssignmentrm = {}

expiredAssignments.push(expiredAssignment)

nTotal = getRandomInt(20, 100)

for (let i = 2; i <= nTotal; i++) {
  expiredDate = new Date(faker.date.past())
  expiredTime = today - expiredDate
  expiredDays = Math.trunc(expiredTime / 86400000) // milisegundos
  idRole = getRandomInt(0, 3)

  expiredAssignmentrm = {
    id: i,
    username: faker.internet.userName(),
    role: roles[idRole],
    avatar: faker.image.avatar(),
    name: 'Activity ' + faker.random.word(),
    expiredDate: expiredDate.toDateString(),
    expiredDays: expiredDays
  }
  expiredAssignments.push(expiredAssignmentrm)
}

expiredAssignments.sort(function compareNumbers (a, b) {
  if (a.expiredDays > b.expiredDays) {
    return -1
  }

  if (a.expiredDays < b.expiredDays) {
    return 1
  }

  return 0
})

module.exports = {
  single: assignment,
  nextAssignments: nextAssignments,
  expiredAssignments: expiredAssignments
}
