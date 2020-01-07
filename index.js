 const express = require("express");
 const PORT = 3000;
 const app = express();

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