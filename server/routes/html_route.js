const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  app.get('/', (req, res) => {
    res.send("Go to /users to see users")
  });

  app.get('/clients', (req, res) => {
    conn.query("SELECT * FROM klientas", (err, results) => {
      if (err) throw err;
      res.json({data: results});
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
