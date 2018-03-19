'use strict'

const practicante = {
  id: 1,
  nombres: 'Maria Alejandra',
  apellidos: 'Martinez Usea',
  email: 'maria.martinez@ulc.edu.co'
}

const practicantes = [
  practicante,
  extend(practicante, { id: 2, nombres: 'David Alberto', apellidos: 'Acevedo Marquez', email: 'david.acevedo@ulc.edu.co' }),
  extend(practicante, { id: 3, nombres: 'Ana', apellidos: 'Peres Olome', email: 'ana.perez@ulc.edu.co' }),
  extend(practicante, { id: 4, nombres: 'Luz Dina', apellidos: 'Villaquiran', email: 'luz.villa@ulc.edu.co' })
]

function extend (obj, values) {
  const clone = Object.assign({}, obj)

  return Object.assign(clone, values)
}

module.exports = {
  single: practicante,
  all: practicantes
}
