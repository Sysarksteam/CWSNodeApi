var mysql = require('mysql');

var connection = mysql.createConnection({
    user : process.env.user,
    password : process.env.password,
    database : process.env.database,
    host : process.env.host

});

connection.connect(err => {
    if(err) throw err;
    console.log('database connected successfully');
});

module.exports = connection