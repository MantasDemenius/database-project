const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  const messageSuccess = "Restaurant succesfully deleted";


  app.get('/Restaurants', (req, res) => {
    var sql = "SELECT restoranas.id_RESTORANAS, \
    imone.id_IMONE, \
    imone.Pavadinimas AS IPavadinimas, \
    restoranas.Pavadinimas, \
    restoranas.Adresas, \
    restoranas.Telefono_numeris, \
    restoranas.Vadovo_vardas, \
    restoranas.Vadovo_pavarde, \
    restoranas.Vadovo_telefono_numeris, \
    restoranas.Vadovo_pastas \
    FROM restoranas LEFT JOIN imone ON restoranas.fk_IMONEid_IMONE = imone.id_IMONE";
    conn.query(sql, (err, data) => {
      if (err) throw err;
      res.json({results: data});
    });
  });

  app.get('/Restaurants/edit/dropdown', (req, res) => {
    var sql = "SELECT \
    id_IMONE, \
    Pavadinimas \
    FROM imone";
    conn.query(sql, (err, data) => {
      if (err) throw err;
      res.json({results: data});
    });
  });


  app.post('/Restaurants/del', (req, res) => {
    let id = req.query.id;
    conn.query("Delete FROM restoranas WHERE id_RESTORANAS = " + mysql.escape(id), (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.status(200).json({ message: { globalSucc: messageSuccess }})
      }
    });
  });

  app.post('/Restaurants/edit', (req, res) => {
    var sql = "UPDATE restoranas SET Pavadinimas = ?, \
    Adresas = ?, \
    Telefono_numeris = ?, \
    Vadovo_vardas = ?, \
    Vadovo_pavarde = ?, \
    Vadovo_telefono_numeris = ?, \
    Vadovo_pastas = ? \
    WHERE id_RESTORANAS = ?";
    conn.query(sql, [req.body.Pavadinimas,
      req.body.Adresas,
      req.body.Telefono_numeris,
      req.body.Vadovo_vardas,
      req.body.Vadovo_pavarde,
      req.body.Vadovo_telefono_numeris,
      req.body.Vadovo_pastas,
      req.body.id_RESTORANAS], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });

  // app.post('/Restaurants/add', (req, res) => {
  //   console.log(req.body);
  //   var sql = "INSERT INTO imone (Pavadinimas, Adresas, Telefono_numeris) VALUES (?, ?, ?)";
  //   conn.query(sql, [req.body.Pavadinimas, req.body.Adresas, req.body.Telefono_numeris], (err, data) => {
  //     if (err) {
  //       res.status(500).json({ errors: {globalErr: err } });
  //     }
  //     else{
  //       res.sendStatus(200);
  //     }
  //   });
  // });
}
