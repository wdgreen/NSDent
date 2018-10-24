// Database MySQL
const mysql = require("mysql");
const connection = mysql.createConnection({
    host     : "", // orqualpau.dyndns.org
    user     : "demo",
    password : "",
    database : "nsdent",
    port     : "3306"
});
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ...");   
    } else {
        console.log("Database error ... " + err);
    }
});

module.exports = connection;