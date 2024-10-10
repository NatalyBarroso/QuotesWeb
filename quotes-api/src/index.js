const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

// instancia de la aplicacion express
const app = express();
// puerto
const PORT = process.env.PORT || 5000;

// conexion a MongoDB usando mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB'); // conexion exitosa
}).catch(err => {
  console.error('Failed to connect to MongoDB', err); // fallo en la conexion
});

app.use(cors()); // permitir solicitudes cors
app.use(bodyParser.json()); // parsear cuerpos de solicitudes JSON
app.use('/api', routes); // comienzo de la ruta para manejar las solicitudes

// iniciar servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
