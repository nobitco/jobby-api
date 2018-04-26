'use strict'

const faker = require('faker/locale/es_MX')
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

function getJobs () {
  let jobs = []
  let job = {}
  let nTotal = getRandomInt(1, 5)
  let postTime

  for (let i = 1; i <= nTotal; i++) {
    postTime = new Date(faker.date.past())
    job = {
      name: faker.name.jobTitle(),
      description: faker.name.jobDescriptor(),
      type: faker.name.jobType(),
      state: 'disponible',
      postime: postTime.toDateString()
    }
    jobs.push(job)
  }
  return jobs
}

const company = {
  username: faker.internet.userName(),
  name: faker.company.companyName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  city: faker.address.city(),
  avatar: faker.image.avatar(),
}

let companies = []
let companyrm = {}

let nTotal = getRandomInt(10, 30)
let listStudents = []
let jobsList = []

for (let i = 1; i <= nTotal; i++) {
  listStudents = getStudents()
  jobsList = getJobs()

  companyrm = {
    username: faker.internet.userName(),
    name: faker.company.companyName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    city: faker.address.city(),
    avatar: faker.image.avatar(),
    students: listStudents,
    jobs: jobsList
  }
  companies.push(companyrm)
}

module.exports = {
  single: company,
  all: companies
}
