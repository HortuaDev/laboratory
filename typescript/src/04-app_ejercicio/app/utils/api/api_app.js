const express = require('express');

const app = express();
const cors = require('cors');
const port = 4657;
const URL1 = "C:/Users/practicasnartex/Desktop/practicas-nartex/src/app/utils/data/cards_data.json";

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());


// Ruta para obtener los datos de las cartas
app.get('/', (req, res) => {
  res.sendFile(URL1);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
