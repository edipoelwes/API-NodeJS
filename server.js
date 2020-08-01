const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(conn => {
    console.log('banco de dados conectado com sucesso');
  })
  .catch(err => {
    console.log('falha ao conectar', err);
  });

requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(8081);