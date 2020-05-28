const express = require('express');
const routes = express.Router();
const UserController = require('./Controllers/userController');

routes.post('/',UserController.persistData)

module.exports = routes;