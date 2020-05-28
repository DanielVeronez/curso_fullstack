const express = require('express');
const routes = express.Router();
const UserController = require('./Controllers/userController');
const nfController = require('./Controllers/nfController')

// Rotas do UserController
routes.get('/users',UserController.listUsers);
routes.post('/autentica',UserController.autentica);
routes.post('/login', UserController.loginHeaders);

//Roras do nfController
// Pegar parametros da URL
routes.post('/notafiscal/:nf',nfController.listNF);

module.exports = routes;