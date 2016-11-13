var express = require("express");
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.set("view engine","ejs");

app.get("/",function(req,res){
   res.render("index.ejs");
});

app.post("/getFileSize", upload.single('file'),function(req,res){
    var json = {
        size:req.file.size
    };
    res.send(json);
});


app.listen(process.env.PORT || 8080, function(err){
    if(err) return console.log(err);
    console.log("server started on PORT: "+process.env.PORT || 8080);
});