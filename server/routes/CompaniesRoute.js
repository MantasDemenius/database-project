const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  const messageSuccess = "Irasas sekmingai istrintas";


  app.get('/Companies', (req, res) => {
    conn.query("SELECT * FROM imone", (err, data) => {
      if (err) throw err;
      res.json({results: data});
    });
  });

  app.post('/Companies/del', (req, res) => {
    let id = req.query.id;
    conn.query("Delete FROM imone WHERE id_IMONE = " + mysql.escape(id), (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.status(200).json({ message: { globalSucc: messageSuccess }})
      }
    });
  });

  app.post('/Companies/edit', (req, res) => {
    var sql = "UPDATE imone SET Pavadinimas = ?, Adresas = ?, Telefono_numeris = ? WHERE id_IMONE = ?";
    conn.query(sql, [req.body.Pavadinimas, req.body.Adresas, req.body.Telefono_numeris, req.body.id_IMONE], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });

  app.post('/Companies/add', (req, res) => {
    var sql = "INSERT INTO imone (Pavadinimas, Adresas, Telefono_numeris) VALUES (?, ?, ?)";
    conn.query(sql, [req.body.Pavadinimas, req.body.Adresas, req.body.Telefono_numeris], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });
}
