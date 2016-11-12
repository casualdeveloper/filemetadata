var express = require("express");
var app = express();

app.get("/",function(req,res){
   res.send("HELLO WORLD!"); 
});

app.listen(process.env.PORT || 8080, function(err){
    if(err) return console.log(err);
    console.log("server started on PORT: "+process.env.PORT || 8080);
});