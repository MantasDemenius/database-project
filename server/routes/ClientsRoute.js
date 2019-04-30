const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  const messageSuccess = "Restaurant succesfully deleted";


  app.get('/Clients', (req, res) => {
    conn.query("SELECT * FROM klientas", (err, data) => {
      if (err) throw err;
      res.json({results: data});
    });
  });

  app.post('/Clients/del', (req, res) => {
    let id = req.query.id;
    conn.query("Delete FROM klientas WHERE id_KLIENTAS = " + mysql.escape(id), (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.status(200).json({ message: { globalSucc: messageSuccess }})
      }
    });
  });

  app.post('/Clients/edit', (req, res) => {
    var sql = "UPDATE klientas SET \
    Vardas = ?, \
    Telefono_numeris = ?, \
    Adresas = ?, \
    Pastas = ? \
    WHERE id_KLIENTAS = ?";
    conn.query(sql, [
      req.body.Vardas,
      req.body.Telefono_numeris,
      req.body.Adresas,
      req.body.Pastas,
      req.body.id_KLIENTAS], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });

  app.post('/Clients/add', (req, res) => {
    var sql = "INSERT INTO klientas (\
      Vardas, \
      Adresas, \
      Telefono_numeris, \
      Pastas \
    ) VALUES (?, ?, ?, ?)";
    conn.query(sql, [
    req.body.Vardas,
    req.body.Adresas,
    req.body.Telefono_numeris,
    req.body.Pastas], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });
}
