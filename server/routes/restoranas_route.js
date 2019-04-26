const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  const messageSuccess = "Irasas sekmingai istrintas";


  app.get('/restoranas', (req, res) => {
    var sql = "SELECT restoranas.id_RESTORANAS, \
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

  app.post('/restoranas/del', (req, res) => {
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

  app.post('/restoranas/update', (req, res) => {
    var sql = "UPDATE restoranas SET Pavadinimas = ?, Adresas = ?, Telefono_numeris = ? WHERE id_IMONE = ?";
    conn.query(sql, [req.body.Pavadinimas, req.body.Adresas, req.body.Telefono_numeris, req.body.id_IMONE], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });

  // app.post('/restoranas/add', (req, res) => {
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
