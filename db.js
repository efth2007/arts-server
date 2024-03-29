const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PW,
    port: 5432,
   ssl: {rejectUnauthorized: false},
});

module.exports = pool;