'use strict'

const faker = require('faker')
var statePractice = ['busqueda', 'proceso', 'culminado']
var universities = ['icesi', 'javeriana', 'usc']
var enterprises = ['Canon', 'Ecopetrol', 'Nobit']
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const novice = {
  username: faker.internet.userName(),
  name: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  state: statePractice[0],
  university: 'icesi',
  place: 'ABC',
  city: faker.address.city(),
  role: 'student'
}

let novices = []
let novicerm = {}

let nTotal = getRandomInt(15, 80)
let idUniversity
let idEnterprise
let idStatePractice

for (let i = 2; i <= nTotal; i++) {
  idUniversity = getRandomInt(0, 3)
  idEnterprise = getRandomInt(0, 3)
  idStatePractice = getRandomInt(0, 3)
  novicerm = {
    username: faker.internet.userName(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    state: statePractice[idStatePractice],
    university: universities[idUniversity],
    place: enterprises[idEnterprise],
    city: faker.address.city(),
    role: 'student'
  }
  novices.push(novicerm)
}

module.exports = {
  single: novice,
  all: novices
}
