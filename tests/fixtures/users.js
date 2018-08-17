'use strict'

const faker = require('faker/locale/es')

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const user = {
  id: 1,
  username: faker.internet.userName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  emailToken: faker.random.uuid(),
  emailVerified: false,
  passwordVerified: false,
  updatedAt: faker.date.past()
}

let users = []
let userrm = {}

let nTotal = getRandomInt(15, 80)

for (let i = 2; i <= nTotal; i++) {
  userrm = {
    id: i - 1,
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    emailToken: faker.random.uuid(),
    emailVerified: false,
    passwordVerified: false,
    updatedAt: faker.date.past()
  }
  users.push(userrm)
}
module.exports = {
  single: user,
  all: users
}
