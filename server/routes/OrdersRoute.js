const mysql = require('mysql');
const path = require('path');

module.exports = (app, conn) => {
  const messageSuccess = "Restaurant succesfully deleted";

  app.get('/Report/Order', (req, res) => {

    var sql = "\
      SELECT \
        restoranas.Pavadinimas, \
        IF(uzsakymas.Data>='2018-01-01' AND uzsakymas.Data<='2019-06-20', uzsakymas.Data, NULL) AS 'Data', \
        klientas.Vardas, \
        COALESCE(patiekalas.name, gerimas.name) AS 'Uzsakymas', \
        uzsakymas.Kaina, \
        uzsakymas.Arbatpinigiai, \
        restoranas.Kaina_Suma, \
        restoranas.Arbatpinigiai_Suma, \
        restoranas.Kaina_Vidurkis, \
        restoranas.Arbatpinigiai_Vidurkis\
      FROM uzsakymas\
        LEFT JOIN patiekalas\
            ON uzsakymas.Patiekalas = patiekalas.id_PATIEKALAS\
        LEFT JOIN gerimas\
        	ON uzsakymas.Gerimas=gerimas.id_GERIMAS\
        LEFT JOIN klientas\
            ON uzsakymas.fk_KLIENTASid_KLIENTAS=klientas.id_KLIENTAS\
        LEFT JOIN ( SELECT \
                   restoranas.id_RESTORANAS, \
                   restoranas.Pavadinimas, \
                   ROUND(SUM(uzsakymas.Kaina), 2) as Kaina_Suma,\
                   ROUND(SUM(uzsakymas.Arbatpinigiai), 2) as Arbatpinigiai_Suma,\
                   ROUND(AVG(uzsakymas.Kaina), 2) AS  Kaina_Vidurkis,\
                   ROUND(AVG(uzsakymas.Arbatpinigiai), 2) AS Arbatpinigiai_Vidurkis\
                   FROM uzsakymas\
                   		LEFT JOIN restoranas\
                   			ON uzsakymas.fk_RESTORANASid_RESTORANAS=restoranas.id_RESTORANAS\
                   		LEFT JOIN klientas\
                   			ON uzsakymas.fk_KLIENTASid_KLIENTAS=klientas.id_KLIENTAS\
                   WHERE uzsakymas.Data>='2018-01-01' \
    			   		AND uzsakymas.Data<='2019-05-20' \
        				AND restoranas.Pavadinimas LIKE '%' \
        				AND klientas.Vardas LIKE '%'\
                   GROUP BY restoranas.Pavadinimas\
            	) restoranas \
                	ON uzsakymas.fk_RESTORANASid_RESTORANAS=restoranas.id_RESTORANAS\
        WHERE restoranas.Pavadinimas LIKE '%' \
        AND klientas.Vardas LIKE '%'\
    	ORDER BY restoranas.Pavadinimas ASC, uzsakymas.Data ASC, klientas.Vardas ASC";

    conn.query(sql, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ errors: {globalErr: err } });
      }
      else{
        console.log(data);
        res.status(200).json({results: data})
      }
    });
  });

}
