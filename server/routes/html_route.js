const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  app.get('/', (req, res) => {
    res.send("Go to /imones to see imones table")
  });

  app.get('/imones', (req, res) => {
    conn.query("SELECT * FROM imone", (err, data) => {
      if (err) throw err;
      res.json({results: data});
    });
  });

  app.post('/imones/del', (req, res) => {
    let id = req.query.id;
    conn.query("Delete FROM imone WHERE id_IMONE = " + mysql.escape(id), (err, data) => {
      if (err) throw err;
      res.sendStatus(200);
      console.log(data);
    });
  });

  app.post('/imones/update', (req, res) => {
    console.log(req.body.Pavadinimas);
    var sql = "UPDATE imone SET Pavadinimas = ?, Adresas = ?, Telefono_numeris = ? WHERE id_IMONE = ?";
    conn.query(sql, [req.body.Pavadinimas, req.body.Adresas, req.body.Telefono_numeris, req.body.id_IMONE], (err, data) => {
      if (err) throw err;
      res.sendStatus(200);
      console.log(data);
    });
  });

  // app.get('/users/add', (req, res) => {
  //   const { name, price} = req.query;
  //   const insert = 'INSERT INTO PRODUCTS VALUES ('${name}', '${price}')';
  //   conn.query(insert, (err, data) => {
  //     if (err) throw err;
  //     res.send("Added product");
  //   });
  // });

}
