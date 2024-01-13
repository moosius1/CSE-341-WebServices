// express web server

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

console.log(process.env.DB_USERNAME);

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
});