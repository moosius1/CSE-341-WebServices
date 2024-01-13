// express web server
import(dotenv);
const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
console.log(dotenv.env.DB_USERNAME);

const port = 3000;
 
app.use('/', require('./routes'));

app.listen(process.env.port || 3000);
console.log('Web Server is listending at port ' + (process.env.port || 3000));