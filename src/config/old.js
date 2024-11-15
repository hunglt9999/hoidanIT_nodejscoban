require('dotenv').config()

//get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3307, //default 3306
    user: process.env.DB_USER, //default empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});



module.exports = connection;