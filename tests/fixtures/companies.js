'use strict'

const faker = require('faker')
var universities = ['icesi', 'javeriana', 'usc']

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getStudents () {
  let students = []
  let student = {}
  let nTotal = getRandomInt(1, 5)
  let idUniversity

  for (let i = 1; i <= nTotal; i++) {
    idUniversity = getRandomInt(0, 3)
    student = {
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      university: universities[idUniversity]
    }
    students.push(student)
  }
  return students
}

const company = {
  username: faker.internet.userName(),
  name: faker.company.companyName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}

let companies = []
let companyrm = {}

let nTotal = getRandomInt(10, 30)
let listStudents = []

for (let i = 1; i <= nTotal; i++) {
  listStudents = getStudents()
  companyrm = {
    username: faker.internet.userName(),
    name: faker.company.companyName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    students: listStudents
  }
  companies.push(companyrm)
}

module.exports = {
  single: company,
  all: companies
}
