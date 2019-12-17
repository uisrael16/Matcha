 const express = require("express");
 const PORT = 3000;
 const app = express();

//  Declare Routers
 var indexRouter = require("./router/index");

// Set View Engine
 app.set("view engine", "ejs");

//  Using and linking Router
 app.use("/", indexRouter);

 app.listen(PORT, () => { 
     console.log(`Server is listening on port: ${PORT}`);  
 });
