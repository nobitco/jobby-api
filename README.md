# REST API jobby

WEB Services para jobby

## Routes
### GET
GET /api/{universidad}/practicantes/entregas-proximas

GET /api/{universidad}/practicantes/entregas-vencidas

GET /api/{universidad}/tutores/

GET /api/{universidad}/practicante/{cedula-identidad}

#### GET /api/{universidad}/entregas-proximas

* `id` (String) Identificador unico de la entrega
* `username` (String) Identificador unico del usuario
* `role` (String) Rol del usuario
* `avatar` (String) URL foto
* `nombre` (String) Nombre de la entrega
* `fechaEntrega` (String) Fecha de la entrega

#### GET /api/{universidad}/entregas-vencidas

Respuesta: una lista JSON:

* `id` (String) Identificador unico de la entrega
* `nombre` (String) Nombre de la entrega
* `fechaEntrega` (String) Fecha de la entrega
* `diasVencidos` (String) Días transcurridos desde la entrega


### POST
POST /api/{universidad}/practicante

POST /api/{universidad}/tutor

## Instalación

1. Clone
2. Instalar paquetes
3. npm run start-dev
4. Y consuma!
