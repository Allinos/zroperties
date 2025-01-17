const mysql = require('mysql2/promise');
require('dotenv').config()
let con = mysql.createPool({
    waitForConnections: true,
    connectionLimit: 10,
    idleTimeout: 60000,
    host: process.env.MySQL_host,
    user: process.env.MySQL_user,
    password: process.env.MySQL_pass,
    // port: 3306,
    database: process.env.MySQL_db,
    multipleStatements: true,
})
con.getConnection((error) => {
    if (!!error) {
        console.log('there is an error bro!' + error)
    } else {
        console.log('connected to datbase!')
    }
})
module.exports = con
