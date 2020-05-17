//Dependencias
const express = require('express');
const router = express.Router();
const sequelize = require('../dbKeysModule');     // esto tiene sequelize ya con las key de la base de datos

/* const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbkeys.dbkeys); */

//Ya estamos ubicados en la ruta /USUARIOS y vamos definiendo el metodo, GET en este caso, y la funcion que queremos ejecutar denrtro

// ToDo: vas a crear una forma de crear usuarios para el Log In 

router.post('/registrar', (req, res) => {
  const registerNewUser = req.body;

  sequelize.query('INSERT INTO usuarios (username, fullname, email, phone, address, pass) VALUES ( :username, :fullname, :email, :phone, :address, :pass)',
  {replacements: registerNewUser})
  .then(usuario => 
        res.status(200).send('Usuario agregado'))
});

// ToDo: La lista de usuarios la va a poder ver solo quien tenga el rol de Admin, asi que por ahora vamos a tener que dejar esto de abajo comentado. 
router.get('/listausuarios', (req,res) => {
  sequelize.query('SELECT * FROM delilahdb.usuarios',{type: sequelize.QueryTypes.SELECT})
  .then(Usuarios => res.status(200).send('Lista de Usuarios'+ JSON.stringify(Usuarios)))
});

//Tenemos que exportar esto para que lo pueda consumir app
module.exports = router;