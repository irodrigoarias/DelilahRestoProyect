//Dependencias
const express = require('express');
const router = express.Router();
const sequelize = require('../dbKeysModule');     // esto tiene sequelize ya con las key de la base de datos

/* const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbkeys.dbkeys); */

//Ya estamos ubicados en la ruta /USUARIOS y vamos definiendo el metodo, GET en este caso, y la funcion que queremos ejecutar denrtro
router.route('/')
  .get( (req, res) => {
    sequelize.query('SELECT * FROM delilahdb.usuarios', {type: sequelize.QueryTypes.SELECT})
    .then((Users => {
        res.status(200).send('Lista de usuarios' + JSON.stringify(Users));
     }));

 });

//Tenemos que exportar esto para que lo pueda consumir app
module.exports = router;