// require dotenv here


// require other packages
const express = require('express');

// require controller
const ctrl = require('./controller');

// require environmental variables and destructure

const port = 4000

const app = express();
app.use(express.json());

// app session

// massive

// endpoints

app.listen(port, () => console.log(`Server listening on ${port}`));