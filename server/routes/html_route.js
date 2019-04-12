const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  app.get('/', (req, res) => {
    conn.query("SELECT * FROM 'restoranas_v3'.klientas", function (err, result, fields) {
      if (err) throw err;
      res.json({klientas: result});
    });
  });
};
