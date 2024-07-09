const sql = require('mssql');

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  connectionTimeout: 60000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

const pool = new sql.ConnectionPool(sqlConfig);


const executeDBQuery = async (query) => {
 console.log('Query > ', query);
 const { recordset } = await pool.query(query);
 return ( recordset );
}


module.exports = {
  pool,
  executeDBQuery,
}