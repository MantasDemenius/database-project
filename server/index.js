const express = require('express');

const mysql = require('mysql');

const app = express();
const port = 3000;

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'restoranas_v3'
});

conn.connect(function(err){
  (err)? console.log(err) : console.log("all good my man with connection");
});

require('./routes/html_route')(app, conn);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
