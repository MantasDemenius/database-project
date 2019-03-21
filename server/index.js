const express = require('express')

const mysql = require('mysql')

const app = express()
const port = 3000

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'restoranas_v3'
});

app.get('/', (req, res) => {
  con.query("SELECT * FROM klientas", function (err, result, fields) {
    if (err) throw err;
    res.json({klientas: result});
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
