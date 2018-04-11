'use strict'

const faker = require('faker')

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

var roles = ['practicante', 'tutor_academico', 'tutor_empresarial']
var idRole
var today = Date.now()

// generate a array N assigments objects

let deliveryDate
deliveryDate = new Date(faker.date.future())

var deliveryTime = deliveryDate - today
var deliveryDays = Math.trunc(deliveryTime / 86400000) // milisegundos

idRole = getRandomInt(1, 3)

const assigment = {
  id: 1,
  username: faker.internet.userName(),
  role: roles[idRole],
  avatar: faker.image.avatar(),
  name: 'informe a',
  deliveryDate: deliveryDate.toDateString(),
  deliveryDays: deliveryDays
}

let assigmentrm = {}
let nextAssigments = []

nextAssigments.push(assigment)

let nTotal = getRandomInt(15, 60)

for (let i = 2; i <= nTotal; i++) {
  deliveryDate = new Date(faker.date.future())
  deliveryTime = deliveryDate - today
  deliveryDays = Math.trunc(deliveryTime / 86400000) // milisegundos

  assigmentrm = {
    id: i,
    username: faker.internet.userName(),
    role: roles[idRole],
    avatar: faker.image.avatar(),
    name: 'Activity ' + faker.random.word(),
    deliveryDate: deliveryDate.toDateString(),
    deliveryDays: deliveryDays
  }
  nextAssigments.push(assigmentrm)
}
// ordenar
nextAssigments.sort(function compareNumbers (a, b) {
  if (a.deliveryDays > b.deliveryDays) {
    return 1
  }

  if (a.deliveryDays < b.deliveryDays) {
    return -1
  }

  return 0
})

// generate array N objects expired assigments

var expiredDate = new Date(faker.date.past())
let expiredTime = today - expiredDate
var expiredDays = Math.trunc(expiredTime / 86400000) // milisegundos

const expiredAssigment = {
  id: 1,
  username: faker.internet.userName(),
  role: roles[idRole],
  avatar: faker.image.avatar(),
  nombre: 'Activity ' + faker.random.word(),
  expiredDate: expiredDate.toDateString(),
  expiredDays: expiredDays
}

let expiredAssigments = []
let expiredAssigmentrm = {}

expiredAssigments.push(expiredAssigment)

nTotal = getRandomInt(20, 80)

for (let i = 2; i <= nTotal; i++) {
  expiredDate = new Date(faker.date.past())
  expiredTime = today - expiredDate
  expiredDays = Math.trunc(expiredTime / 86400000) // milisegundos

  expiredAssigmentrm = {
    id: i,
    username: faker.internet.userName(),
    role: roles[idRole],
    avatar: faker.image.avatar(),
    nombre: 'Activity ' + faker.random.word(),
    expiredDate: expiredDate.toDateString(),
    expiredDays: expiredDays
  }
  expiredAssigments.push(expiredAssigmentrm)
}

expiredAssigments.sort(function compareNumbers (a, b) {
  if (a.expiredDays > b.expiredDays) {
    return -1
  }

  if (a.expiredDays < b.expiredDays) {
    return 1
  }

  return 0
})

module.exports = {
  single: assigment,
  nextAssigments: nextAssigments,
  expiredAssigments: expiredAssigments
}
