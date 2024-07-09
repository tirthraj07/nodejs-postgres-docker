const { Pool } = require('pg');
require('dotenv').config();

const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_URL;

if(!POSTGRES_CONNECTION_STRING){
    console.error("POSTGRES_URL not configured in environment variables");
    throw Error("POSTGRES_URL NOT FOUND");
}

const pool = new Pool({
    connectionString: POSTGRES_CONNECTION_STRING
})

console.log('POSTGRES = ', POSTGRES_CONNECTION_STRING);

pool.connect((err, client, release) => {
    console.log(client);
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result.rows)
    })
  })
const query = (text, params) => {
    return pool.query(text, params);
}

module.exports = { query };