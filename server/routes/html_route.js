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

  // app.get('/users/add', (req, res) => {
  //   const { name, price} = req.query;
  //   const insert = 'INSERT INTO PRODUCTS VALUES ('${name}', '${price}')';
  //   conn.query(insert, (err, data) => {
  //     if (err) throw err;
  //     res.send("Added product");
  //   });
  // });

}
