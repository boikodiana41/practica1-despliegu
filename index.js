require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const recintos = require('./routes/recintos');

const eventos = require('./routes/eventos');

mongoose.connect(process.env.URL_BD);

const app = express();

app.use(express.json());
app.use('/recintos', recintos);
app.use('/eventos', eventos);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});