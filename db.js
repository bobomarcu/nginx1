const mysql = require('mysql')

var conn  = mysql.createConnection({


    host:'192.168.7.156',
    port:'3306',
    user:'root',
    password:'root',
    database:'scriptAPP'


})

module.exports = conn