// express web server

const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Arthur Moes');
});

const port = 3000;

app.listen(process.env.port || 3000);
console.log('Web Server is listending at port ' + (process.env.port || 3000));