// require dotenv here
require('dotenv').config();
// require other packages
const express = require('express');
const massive = require('massive');

// require controller
const ctrl = require('./controller');

// require environmental variables and destructure
const { CONNECTION_STRING } = process.env;

const port = 4000;

const app = express();
app.use(express.json());

// app session

massive
massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db);
  console.log('db connected');
});

// endpoints

app.listen(port, () => console.log(`Server listening on ${port}`));