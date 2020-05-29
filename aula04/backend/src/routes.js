const express = require('express');
const routes = express.Router();
const userController = require('./Controllers/userController');

routes.post('/user',userController.persistData)
routes.get('/user',userController.listUsers)
routes.get('/userUm'userController.listaUm)

module.exports = routes;