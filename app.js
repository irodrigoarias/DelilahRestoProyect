//Instalamos las dependecias que vamos a usar
const express = require('express');             //modulo Express
const bodyParser = require('body-parser');      //para poder acceder al req.body cuando hagamos un post
const usuarios = require('./routes/usuarios');  //La ruta de usuarios
const platos = require('./routes/platos');

//Iniciamos el servidor con express
const app = express();
app.use(bodyParser.json());

//Rutas => se podrian usar controllers, uno por cada accion de la ruta pero es medio tedioso hacerlo para un proyecto chico
app.use('/usuarios',usuarios);
app.use('/platos',platos);

//Le decimos que puerto escuchar
app.listen(3000, () => {
    console.log("Servidor iniciado");
});

