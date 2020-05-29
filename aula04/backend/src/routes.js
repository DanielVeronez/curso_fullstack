const express = require('express');
const routes = express.Router();
const userController = require('./Controllers/userController');

routes.post('/user',userController.persistData)
routes.get('/user',userController.listUsers)

module.exports = routes;