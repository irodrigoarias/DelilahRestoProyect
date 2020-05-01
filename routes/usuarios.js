//Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('GET entrando al /users');
})



//Tenemos que exportar esto para que lo pueda consumir app
module.exports = router;