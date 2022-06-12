const express=require("express");
const app = express();
const bodyparser=require("body-parser");

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.use(express.urlencoded({extended:true}));

app.post("/",function(req,res){
    //console.log(req);
    var result=Number(req.body.num1)+Number(req.body.num2);
    res.send("the result is "+result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res){
    //console.log(req);
    var result=Number(req.body.weight)/(Number(req.body.height)*Number(req.body.height));
    res.send("Your BMI is "+result);
});

app.listen(3000,function(){
    console.log("server is live on port 3000");
});
