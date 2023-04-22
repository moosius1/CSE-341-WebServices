// express web server

const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.arthurRoute);

app.get('/maxwell', lesson1Controller.maxwellRoute);

const port = 3000;

app.listen(process.env.port || 3000);
console.log('Web Server is listending at port ' + (process.env.port || 3000));