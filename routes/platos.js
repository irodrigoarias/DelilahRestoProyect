//Dependencias
const express = require('express');
const router = express.Router();
const sequelize = require('../dbKeysModule');

router.get('/', (req,res) => {
    sequelize.query('SELECT * FROM delilahdb.platos',{type: sequelize.QueryTypes.SELECT})
    .then(Users => {
        res.status(200).send('Lista de Platos' + JSON.stringify(Users));
    })
});

router.post('/platonuevo', (req,res) => {
    var platonuevo = req.body;
    sequelize.query('INSERT INTO platos(nombre, precio) values (:nombre, :precio)',
    {replacements: platonuevo})
    .then(resultados => res.send(resultados)); //? Que devuelve aca
});
    


//Tenemos que exportar esto para que lo pueda consumir app
module.exports = router;

/* router.route('/') //el router.route('/') se usa para cuando tenes muchos metodos con un mismo path
    .get( (req, res) => {
        sequelize.query('SELECT * FROM delilahdb.platos', {type: sequelize.QueryTypes.SELECT})
        .then((Users => {
        res.status(200).send('Lista de Platos' + JSON.stringify(Users));
    }));
    })
    .post( (req,res) => {
        res.send("OK");
    }); */