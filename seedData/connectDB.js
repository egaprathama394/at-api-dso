/* eslint-disable no-shadow */
const sql = require('mssql');

const config = {
  user: 'astralogindev',
  password: 'Astra123',
  server: 'astraazuredatabase.database.windows.net',
  database: 'AstraServiceDevelopment',
  port: 1433,
  encrypt: true,
};

// eslint-disable-next-line arrow-body-style
export default (sqlQuery) => {
  return new Promise((resolve, reject) => {
    sql.connect(config, () => {
      const QuerySQL = new sql.Request();
      QuerySQL.query(sqlQuery, (err, data) => {
        if (err) {
          return reject(err);
        }
        sql.close();
        return resolve(data);
      });
    });
  });
};
