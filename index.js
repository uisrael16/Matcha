 const express = require("express");
 const PORT = 3000;
 const app = express();
 const mysql = require('mysql');

 // Create connection
 const db = mysql.createConnection({
     host       : 'localhost',
     user       : 'root',
     port       : '3000',
     password   : '123456789',
     socketpath : '/goinfre/uisrael/Desktop/mamp/mysql/tmp/mysql.sock',
     database   : 'Matcha'
 });

 // Connect
 db.connect((err) => {
     if (err){
         throw err;
     }
     console.log('MySql Connected...');
 });

 // Create DB

app.get('/crealedb', (req, res) => {
    let sql = 'CREATE DATABASE Matcha';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created...');
    });
});

// Set View Engine
 app.set("view engine", "ejs");

//  Using and linking Router to move around the pages
 
app.get('/', function(req, res){
    res.render('Register.ejs');
  });
 app.get('/Login', (req, res) =>{
     res.render('Login.ejs')
 })

 app.get('/Register', (req, res) =>{
    res.render('Register.ejs')
})
 app.listen(PORT, () => { 
     console.log(`Server is listening on port: ${PORT}`);  
 });