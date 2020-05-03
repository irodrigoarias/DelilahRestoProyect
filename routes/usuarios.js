//Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/delilahdb');

//Ya estamos ubicados en la ruta /USUARIOS y vamos definiendo el metodo, GET en este caso, y la funcion que queremos ejecutar denrtro
router.route('/')
  .get( (req, res) => {
    sequelize.query('SELECT * FROM delilahdb.usuarios', {type: sequelize.QueryTypes.SELECT})
    .then((Users => {
        res.status(200).send('Lista de usuarios' + JSON.(Users));
     }));

/*     const json = {
    nombre: 'Juan',
    appellido: 'Doe',
  };
  
  res.status(209); //devolvemos un status code de 2xx que la cosa salio bien. Se puede usar el siguiente  res.statusCode = 211;
  res.send(json); //En el apunte decia res.json(json) porque esto convierte lo que tengamos adentro a JSON pero si todo lo que le estamos dando esta en JSON entonces no pasa one. Esto tmb termina como si fuera un res.end
  */});

//Tenemos que exportar esto para que lo pueda consumir app
module.exports = router;