const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');

routes.post('/users',UserController.persisteUser);
routes.get('/users',UserController.listUser);
routes.get('/userGit',UserController.getUserGit);

module.exports = routes;

/* 
Exercicios:
1- Pegar as informações do github e salvar no banco.
2- Persistir no banco usuarios do git se criado antes de 2020
3- Novo Backend: Passar uma origem:[lat,log] e destino:[lat.log] => distância
*/