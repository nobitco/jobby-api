# REST API jobby

WEB Services para jobby

## Routes
### GET

GET /api/{universidad}/practicante/{cedula-identidad}

#### GET /api/{universidad}/next-assigments

Respuesta JSON

* `id` (String) Identificador unico de la entrega
* `username` (String) Identificador unico del usuario
* `role` (String) Rol del usuario
* `avatar` (String) URL foto
* `name` (String) Nombre de la entrega
* `deliveryDate` (String) Fecha de la entrega
* `deliveryDays` (String) Número de días para la entrega

#### GET /api/{universidad}/expired-assigments

Respuesta JSON

* `id` (String) Identificador unico de la entrega
* `username` (String) Identificador unico del usuario
* `role` (String) Rol del usuario
* `avatar` (String) URL foto
* `name` (String) Nombre de la entrega
* `expiredDate` (String) Fecha de la entrega
* `expiredDays` (String) Número de días vencidos


### POST
POST /api/{universidad}/practicante

POST /api/{universidad}/tutor

## Instalación

1. Clone
2. Instalar paquetes
3. npm run start-dev
4. Y consuma!
