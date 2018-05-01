# REST API jobby

WEB Services para jobby

## Routes
### GET

GET /api/{universidad}/practicante/{cedula-identidad}

#### GET /api/{universidad}/students

Respuesta JSON LIST

* `username` (String) Identificador unico del estudiante
* `name` (String) Nombres del estudiante
* `lastname` (String) Apellidos del estudiante
* `email` (String) Email del estudiante
* `avatar` (String) Direccion avatar del estudiante
* `state` (String) Estado del estudiante en el proceso (busqueda, proceso, culminado)
* `university` (String) Identificador unico de la universidad
* `place` (String) Identificador unico de la empresa donde realiza práctica
* `city` (String) Ciudad 
* `role` (String) Rol del usuario

#### GET /api/{universidad}/tutors

Respuesta JSON LIST

* `name` (String) Nombres del tutor
* `lastname` (String) Apellidos del estudiante
* `email` (String) Email del estudiante
* `avatar` (String) Direccion avatar del estudiante
* `university` (String) Identificador unico de la universidad
* `role` (String) Rol del usuario

#### GET /api/{universidad}/next-assignments

Respuesta JSON LIST

* `id` (String) Identificador unico de la entrega
* `username` (String) Identificador unico del usuario responsable de la asignacion
* `role` (String) Rol del usuario (practicante, tutor, jefe)
* `avatar` (String) URL foto
* `activity` (String) Nombre de la actividad
* `deliveryDate` (String) Fecha de entrega
* `deliveryDays` (String) Número de días para la entrega

#### GET /api/{universidad}/expired-assignments

Respuesta JSON LIST

* `id` (String) Identificador unico de la entrega
* `username` (String) Identificador unico del usuario
* `role` (String) Rol del usuario
* `avatar` (String) URL foto
* `activity` (String) Nombre de la entrega
* `expiredDate` (String) Fecha de la entrega
* `expiredDays` (String) Número de días vencidos

#### GET /api/{universidad}/places

Respuesta JSON LIST

* `id` (String) Identificador unico de la empresa o centro de prácticas
* `username` (String) Identificador unico del usuario (jefe o tutor empresarial)
* `name` (String) Nombre de la compañía
* `lastname` (String) Nombre del representante de la empresa
* `avatar` (String) URL foto
* `email` (String) Email de la empresa
* `city` (String) Ciudad de la empresa
* `students` (json list) Practicantes de la empresa
* `city` (json list) lista de vacantes

### POST
POST /api/{universidad}/practicante

POST /api/{universidad}/tutor

## Instalación

1. Clone
2. Instalar paquetes
3. npm run start-dev
4. Y consuma!
