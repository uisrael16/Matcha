const express = require("express");
const PORT = 5000;
const app = express();
const mysql = require('mysql');
const util = require('util');


const db = mysql.createConnection({
    host       : 'localhost',
    user       : 'root',
    port       : '8080',
    password   : '123456789',
    socketPath : '/goinfre/uisrael/Desktop/mamp/mysql/tmp/mysql.sock',
    

});

console.log(util.inspect(db));

db.connect(function(err){
    if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE DATABASE matcha";
  
  db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
  
    const dbb = mysql.createConnection({
        host       : 'localhost',
        user       : 'root',
        port       : '8080',
        password   : '123456789',
        socketPath : '/goinfre/uisrael/Desktop/mamp/mysql/tmp/mysql.sock',
        database   : 'matcha'
    
    });
    var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255), birthday VARCHAR(255))";
    dbb.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
});

    app.listen(PORT, () => { 
        console.log(`Server is listening on port: ${PORT}`);  
 });
});
