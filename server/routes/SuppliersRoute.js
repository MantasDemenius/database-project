const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  const messageSuccess = "Irasas sekmingai istrintas";


  app.get('/Suppliers', (req, res) => {
    conn.query("SELECT * FROM tiekejas", (err, data) => {
      if (err) throw err;
      res.json({results: data});
    });
  });

  app.post('/Suppliers/del', (req, res) => {
    let id = req.query.id;
    conn.query("Delete FROM tiekejas WHERE id_TIEKEJAS = " + mysql.escape(id), (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.status(200).json({ message: { globalSucc: messageSuccess }})
      }
    });
  });

  app.post('/Suppliers/edit', (req, res) => {
    var sql = "UPDATE tiekejas SET \
    Pavadinimas = ?, \
    Telefono_numeris = ?, \
    Adresas = ?, \
    Pastas = ?, \
    Vadovo_vardas = ?, \
    Vadovo_pavarde = ?, \
    Vadovo_telefono_numeris = ?, \
    Vadovo_pastas = ? \
    WHERE id_TIEKEJAS = ?";
    conn.query(sql, [
      req.body.Pavadinimas,
      req.body.Telefono_numeris,
      req.body.Adresas,
      req.body.Pastas,
      req.body.Vadovo_vardas,
      req.body.Vadovo_pavarde,
      req.body.Vadovo_telefono_numeris,
      req.body.Vadovo_pastas,
      req.body.id_TIEKEJAS], (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });

  app.post('/Suppliers/add', (req, res) => {
    var sql = "INSERT INTO tiekejas (\
      Pavadinimas, \
      Telefono_numeris, \
      Adresas, \
      Pastas, \
      Vadovo_vardas, \
      Vadovo_pavarde, \
      Vadovo_telefono_numeris, \
      Vadovo_pastas\
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    conn.query(sql, [
    req.body.Pavadinimas,
    req.body.Telefono_numeris,
    req.body.Adresas,
    req.body.Pastas,
    req.body.Vadovo_vardas,
    req.body.Vadovo_pavarde,
    req.body.Vadovo_telefono_numeris,
    req.body.Vadovo_pastas], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });
}
