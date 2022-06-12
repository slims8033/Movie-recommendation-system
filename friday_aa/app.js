const express=require("express");
const app=express();

const bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs'); // tells the app to use ejs as a view engine, simple

//A template engine enables you to use static template files in your application.
// At runtime, the template engine replaces variables in a template file with 
//actual values, and transforms the template into an HTML file sent to the client.
// This approach makes it easier to design an HTML page.

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.listen(3000,function(){
    console.log("live on port 3000");
})

app.post("/",function(req,res){
    var selectedday= Object.keys(req.body)[0];

    res.render('clipdisplayer', {day: selectedday});
    //{key:value} -> key is the variable name that will be used in ejs template 
    // value-> is the value of that key that will be displayed in ejs template 
})