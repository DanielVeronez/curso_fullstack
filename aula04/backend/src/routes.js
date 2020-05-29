const express = require('express');
const routes = express.Router();
const userController = require('./Controllers/userController');

routes.post('/user',userController.persistData);
routes.get('/user',userController.listUsers);
routes.get('/user/:id',userController.listaUm);
routes.get('/userName/:name',userController.findUserByName);
routes.get('/userSex/:sex',userController.listBySex);
routes.get('/userAge/:age',userController.listByAge);
routes.get('/userFields/:f',userController.listManyFields);

module.exports = routes;