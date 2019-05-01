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
      res.status(200).json({results: data});
    });
  });

  app.post('/Restaurants/del', (req, res) => {
    let id = req.query.id;
    conn.query("DELETE FROM fk_teikia WHERE fk_RESTORANASid_RESTORANAS = " + mysql.escape(id), (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        conn.query("DELETE FROM restoranas WHERE id_RESTORANAS = " + mysql.escape(id), (err1, data1) => {
          if (err1) {
            res.status(500).json({ errors: {globalErr: err1 } });
          }
          else{
            res.status(200).json({ message: { globalSucc: messageSuccess }})
          }
        });
      }
    });

  });

  app.post('/Restaurants/edit', (req, res) => {
    var sql = "UPDATE restoranas SET \
    fk_IMONEid_IMONE = ?, \
    Pavadinimas = ?, \
    Adresas = ?, \
    Telefono_numeris = ?, \
    Vadovo_vardas = ?, \
    Vadovo_pavarde = ?, \
    Vadovo_telefono_numeris = ?, \
    Vadovo_pastas = ? \
    WHERE id_RESTORANAS = ?";

    var sql1 = "UPDATE fk_teikia SET \
    fk_TIEKEJASid_TIEKEJAS = ? \
    WHERE fk_RESTORANASid_RESTORANAS = ?";

    conn.query(sql, [
      req.body.Imone,
      req.body.Pavadinimas,
      req.body.Adresas,
      req.body.Telefono_numeris,
      req.body.Vadovo_vardas,
      req.body.Vadovo_pavarde,
      req.body.Vadovo_telefono_numeris,
      req.body.Vadovo_pastas,
      req.body.id_RESTORANAS], (err, data) => {
        if (err)
        {
          res.status(500).json({ errors: {globalErr: err } });
        }
        else
        {
          conn.query(sql1, [
            req.body.Tiekejas,
            req.body.id_RESTORANAS], (err, data) => {
              if (err)
              {
                res.status(500).json({ errors: {globalErr: err } });
              }
              else
              {
                res.status(200).json({ message: { globalSucc: messageSuccess }});
              }
          });
        }
      });
  });

  app.post('/Restaurants/add', (req, res) => {
    var sql = "INSERT INTO restoranas (\
      fk_IMONEid_IMONE, \
      Pavadinimas, \
      Adresas, \
      Telefono_numeris, \
      Vadovo_vardas, \
      Vadovo_pavarde, \
      Vadovo_telefono_numeris, \
      Vadovo_pastas\
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    var sql1 = "INSERT INTO fk_teikia (\
      fk_RESTORANASid_RESTORANAS, \
      fk_TIEKEJASid_TIEKEJAS\
    ) VALUES (?, ?)";

    conn.query(sql, [
    req.body.Imone,
    req.body.Pavadinimas,
    req.body.Adresas,
    req.body.Telefono_numeris,
    req.body.Vadovo_vardas,
    req.body.Vadovo_pavarde,
    req.body.Vadovo_telefono_numeris,
    req.body.Vadovo_pastas], (err, data) => {
      if (err) {
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        const id = data.insertId;
        console.log(id);
        conn.query(sql1, [id, req.body.Tiekejas], (err1, data1) => {
          if (err1) {
            res.status(500).json({ errors: {globalErr: err1 } });
          }
          else{
            res.status(200).json({ message: { globalSucc: messageSuccess }});
          }
        });
      }
    });
  });

  app.get('/Restaurants/suppliers', (req, res) => {
    var sql = "SELECT \
    fk_RESTORANASid_RESTORANAS as fk_RESTORANAS, \
    fk_TIEKEJASid_TIEKEJAS as fk_TIEKEJAS \
    FROM fk_teikia \
    ORDER BY fk_RESTORANASid_RESTORANAS ASC";
    conn.query(sql, (err, data) => {
      if (err) throw err;
      res.status(200).json({results: data});
    });
  });

}
