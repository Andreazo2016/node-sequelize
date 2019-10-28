const express = require('express')
const routes = express.Router()

const HomeController = require('./controllers/HomeController')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')

routes.get('/',HomeController.index)
routes.post('/users',UserController.store)
routes.get('/users',UserController.index)
routes.post('/users/:user_id/address',AddressController.store)
routes.get('/users/:user_id/address',AddressController.index)


routes.post('/users/:user_id/tech',TechController.store)
routes.get('/users/:user_id/tech',TechController.index)
routes.delete('/users/:user_id/tech',TechController.delete)

module.exports = routes