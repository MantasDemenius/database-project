const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  const messageSuccess = "Restaurant succesfully deleted";


  app.get('/Comments', (req, res) => {
    var sql = "SELECT atsiliepimas.id_ATSILIEPIMAS, \
    restoranas.Pavadinimas as RPavadinimas, \
    restoranas.id_RESTORANAS, \
    klientas.id_KLIENTAS, \
    klientas.Vardas as KVardas, \
    atsiliepimas.Data, \
    atsiliepimas.Komentaras, \
    atsiliepimas.Ivertinimas \
    FROM atsiliepimas \
    LEFT JOIN restoranas ON atsiliepimas.fk_RESTORANASid_RESTORANAS = restoranas.id_RESTORANAS \
    LEFT JOIN klientas ON atsiliepimas.fk_KLIENTASid_KLIENTAS = klientas.id_KLIENTAS \
    ORDER BY restoranas.id_RESTORANAS ASC";
    conn.query(sql, (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.status(200).json({results: data});
      }
    });
  });

  app.post('/Comments/del', (req, res) => {
    let id = req.query.id;
    conn.query("Delete FROM atsiliepimas WHERE id_ATSILIEPIMAS = " + mysql.escape(id), (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.status(200).json({ message: { globalSucc: messageSuccess }})
      }
    });
  });

  // app.post('/Restaurants/edit', (req, res) => {
  //   var sql = "UPDATE restoranas SET \
  //   fk_IMONEid_IMONE = ?, \
  //   Pavadinimas = ?, \
  //   Adresas = ?, \
  //   Telefono_numeris = ?, \
  //   Vadovo_vardas = ?, \
  //   Vadovo_pavarde = ?, \
  //   Vadovo_telefono_numeris = ?, \
  //   Vadovo_pastas = ? \
  //   WHERE id_RESTORANAS = ?";
  //   conn.query(sql, [
  //     req.body.dropdown,
  //     req.body.Pavadinimas,
  //     req.body.Adresas,
  //     req.body.Telefono_numeris,
  //     req.body.Vadovo_vardas,
  //     req.body.Vadovo_pavarde,
  //     req.body.Vadovo_telefono_numeris,
  //     req.body.Vadovo_pastas,
  //     req.body.id_RESTORANAS], (err, data) => {
  //     if (err) {
  //       res.status(500).json({ errors: {globalErr: err } });
  //     }
  //     else{
  //       res.sendStatus(200);
  //     }
  //   });
  // });
  //
  // app.post('/Restaurants/add', (req, res) => {
  //   console.log(req.body);
  //   var sql = "INSERT INTO restoranas (\
  //     fk_IMONEid_IMONE, \
  //     Pavadinimas, \
  //     Adresas, \
  //     Telefono_numeris, \
  //     Vadovo_vardas, \
  //     Vadovo_pavarde, \
  //     Vadovo_telefono_numeris, \
  //     Vadovo_pastas\
  //   ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  //   conn.query(sql, [
  //   req.body.dropdown,
  //   req.body.Pavadinimas,
  //   req.body.Adresas,
  //   req.body.Telefono_numeris,
  //   req.body.Vadovo_vardas,
  //   req.body.Vadovo_pavarde,
  //   req.body.Vadovo_telefono_numeris,
  //   req.body.Vadovo_pastas], (err, data) => {
  //     if (err) {
  //       res.status(500).json({ errors: {globalErr: err } });
  //     }
  //     else{
  //       res.sendStatus(200);
  //     }
  //   });
  // });
}
