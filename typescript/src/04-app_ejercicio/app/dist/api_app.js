var express = require('express');
var app = express();
var port = 3000;
var URL1 = "C:/Users/practicasnartex/Desktop/practicas-nartex/src/app/utils/data/data_users.json";
// Middleware para parsear JSON
app.use(express.json());
// Ruta para obtener todos los usuarios
app.get('/usuarios', function (req, res) {
    res.json(URL1);
});
// Iniciar el servidor
app.listen(port, function () {
    console.log("Servidor corriendo en http://localhost:".concat(port));
});
