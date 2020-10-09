// require dotenv here
require('dotenv').config();
// require other packages
const express = require('express');
const massive = require('massive');
const session = require('express-session')

// require controller
const ctrl = require('./controller');

// require environmental variables and destructure
const { CONNECTION_STRING, SESSION_SECRET } = process.env;

const port = 4000;

const app = express();
app.use(express.json());

// app session

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive
massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db);
  console.log('db connected');
});

// endpoints

app.post('/api/register', ctrl.register);
app.post('/api/login', ctrl.login);

app.listen(port, () => console.log(`Server listening on ${port}`));