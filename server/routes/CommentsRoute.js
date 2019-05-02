const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  const messageSuccess = "Restaurant succesfully deleted";


  app.get('/Comments', (req, res) => {
    // var sql = "SELECT atsiliepimas.id_ATSILIEPIMAS, \
    // restoranas.Pavadinimas as RPavadinimas, \
    // restoranas.id_RESTORANAS, \
    // klientas.id_KLIENTAS, \
    // klientas.Vardas as KVardas, \
    // atsiliepimas.Data, \
    // atsiliepimas.Komentaras, \
    // atsiliepimas.Ivertinimas \
    // FROM atsiliepimas \
    // LEFT JOIN restoranas ON atsiliepimas.fk_RESTORANASid_RESTORANAS = restoranas.id_RESTORANAS \
    // LEFT JOIN klientas ON atsiliepimas.fk_KLIENTASid_KLIENTAS = klientas.id_KLIENTAS GROUP BY restoranas.id_RESTORANAS, klientas.id_KLIENTAS \
    // ORDER BY restoranas.id_RESTORANAS ASC";

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
    LEFT JOIN klientas ON atsiliepimas.fk_KLIENTASid_KLIENTAS = klientas.id_KLIENTAS";
    conn.query(sql, (err, data) => {
      if (err) {
        console.log(err);
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

  app.post('/Comments/edit', (req, res) => {
    var sql = "UPDATE atsiliepimas SET \
    fk_RESTORANASid_RESTORANAS = ?, \
    fk_KLIENTASid_KLIENTAS = ?, \
    Data = ?, \
    Komentaras = ?, \
    Ivertinimas = ? \
    WHERE id_ATSILIEPIMAS = ?";
    conn.query(sql, [
      req.body.Restoranas,
      req.body.Klientas,
      req.body.Data,
      req.body.Komentaras,
      req.body.Ivertinimas,
      req.body.id_ATSILIEPIMAS
    ], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        res.sendStatus(200);
      }
    });
  });

  app.post('/Comments/add', (req, res) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(req.body);
    var sql = "INSERT INTO atsiliepimas (\
      fk_RESTORANASid_RESTORANAS, \
      fk_KLIENTASid_KLIENTAS, \
      Data, \
      Komentaras, \
      Ivertinimas \
    ) VALUES (?, ?, ?, ?, ?)";
    var sql1 = "INSERT INTO klientas (\
      Vardas, \
      Adresas, \
      Telefono_numeris, \
      Pastas \
    ) VALUES (?, ?, ?, ?)";
    if(req.body.Vardas === '' && req.body.Adresas === '' && req.body.Telefono_numeris === '' && req.body.Pastas === ''){
      conn.query(sql, [
        req.body.Restoranas,
        req.body.Klientas,
        date,
        req.body.Komentaras,
        req.body.Ivertinimas], (err, data) => {
        if (err) {
          res.status(500).json({ errors: {globalErr: err } });
        }
        else{
          res.sendStatus(200);
        }
      });
    }else{

      conn.query(sql1, [
      req.body.Vardas,
      req.body.Adresas,
      req.body.Telefono_numeris,
      req.body.Pastas], (err, data) => {
        if (err) {
          res.status(500).json({ errors: {globalErr: err } });
        }
        else{
          conn.query(sql, [
            req.body.Restoranas,
            data.insertId,
            date,
            req.body.Komentaras,
            req.body.Ivertinimas], (err1, data1) => {
            if (err1) {
              res.status(500).json({ errors: {globalErr: err } });
            }
            else{
              res.status(200).json({ message: { globalSucc: messageSuccess }})
            }
          });
        }
      });

    }

  });
}
