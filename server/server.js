require('dotenv').config();

const express = require('express');
const path = require('path');

const db = require('./config/connection');

const PORT = process.env.PORT
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require('./routes');

app.use('/', router);


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port http://localhost:${PORT} !`);
  });
});

