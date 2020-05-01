//Instalamos las dependecias que vamos a usar
const express = require('express');
const bodyParser = require('body-parser');
const usuarios = require('./routes/usuarios');

//Iniciamos el servidor con express
const app = express();
app.use(bodyParser.json());

//Rutas => se podrian usar controllers, uno por cada accion de la ruta pero es medio tedioso hacerlo para un proyecto chico
app.use('/usuarios',usuarios);

//Le decimos que puerto escuchar
app.listen(3000, () => {
    console.log("Servidor iniciado");
})
