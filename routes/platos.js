//Dependencias
const express = require('express');
const router = express.Router();
const sequelize = require('../dbKeysModule');

router.get('/', (req,res) => {
    sequelize.query('SELECT * FROM delilahdb.platos',{type: sequelize.QueryTypes.SELECT})
    .then(Platos => {
        res.status(200).send('Lista de Platos' + JSON.stringify(Platos));
    })
});

router.post('/platonuevo', (req,res) => {
    var platonuevo = req.body;

    sequelize.query('INSERT INTO platos(nombre, precio) values (:nombre, :precio)', //If an object is passed, :key will be replaced with the keys from that object. If the object contains keys not found in the query or vice versa, an exception will be thrown. 
    {replacements: platonuevo})
    .then(resultados => res.send(resultados)); //? Que devuelve aca
});

router.delete('/chauplato/:id', (req, res) => {
    const id = req.params.id;

    sequelize.query('DELETE FROM platos WHERE idPlato = ?',{replacements: [id]}) //If an array is passed, ? will be replaced in the order that they appear in the array
    .then(res.send("Plato Borrado"));
});

router.patch('/editarplato/:id', (req, res) => {
    // TODO: esto se podria mejorar al verificar si los 2 parametros fueron ingresados.    

    var nombrePlato = req.query.nombre; 
    var precioPlato = req.query.precio; 
    const id = req.params.id;

    //res.send("Editar el plato con id: " + id + " Editar con el nombre: " + nombrePlato + " y el precio " + precioPlato);

    sequelize.query('UPDATE platos SET nombre = :nombre, precio = :precio WHERE idPlato = :idPlato', 
    {replacements: {nombre: nombrePlato, precio: precioPlato, idPlato: id}})
    .then(res.status(201).send("Plato Editador correctamente"));

    //res.send("Editar el plato con id: " + id + " Editar con el nombre: " + nombrePlato + " y el precio " + precioPlato);
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