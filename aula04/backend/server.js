const express = require('express');
const mongoose = require('mongoose');
const server = express();
const requireDir = require('require-dir');

//Conexão com BD
mongoose.connect('mongodb+srv://admin:admin@cluster0-1kfys.mongodb.net/cursoReact?retryWrites=true&w=majority', 
    { useNewUrlParser:true, useUnifiedTopology:true });

//Import Models
requireDir('./src/models');

//config
server.use(express.json());

//routes
server.use('/api',require('./src/routes'));

server.listen(3002);
console.log('Servidor escuranto na porta 3002');