//const { query } = require("express");
const express=require("express");
const app=express();
const https = require('https');
const bodyparser=require('body-parser');
//app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("app is live on port 3000");
});

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
   });

app.get("/page2", function(req,res){
   res.sendFile(__dirname+"/index.html");
  });

  app.post("/",function(req,res){
      //console.log(req.body);
      console.log("cityname received"+req.body.cityname);
      const query=req.body.cityname;
 const apikey="68be18252a76712595668d3735e9d58a"
 const units="metric"
 const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+units+"";
 https.get(url, (resp) => {
     console.log(resp.statusCode);
     resp.on("data" , function(data){
             console.log(data);
             const weatherdata=JSON.parse(data);
            // console.log(weatherdata);
            const weatherdescript=weatherdata.weather[0].description
             console.log(weatherdata.main.temp);
             const imgsrc="http://openweathermap.org/img/wn/"+weatherdata.weather[0].icon+"@2x.png"
             
             res.write("<h1>The temp in "+query+" is "+weatherdata.main.temp+" degree </h1>");
             res.write("<p>The weather is currently "+weatherdescript+"</p>");
             res.write("<img src="+imgsrc+">");
             
             res.send();
     })
  })

})

  /*app.get("/page2", function(req,res){
      res.write("random");
      res.send();
   }); */


  
 // res.send("app is working live on server 3000");
 /*const query="New Delhi";
 const apikey="68be18252a76712595668d3735e9d58a"
 const units="metric"
 const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+units+"";
 https.get(url, (resp) => {
     console.log(resp.statusCode);
     resp.on("data" , function(data){
             console.log(data);
             const weatherdata=JSON.parse(data);
            // console.log(weatherdata);
            const weatherdescript=weatherdata.weather[0].description
             console.log(weatherdata.main.temp);
             const imgsrc="http://openweathermap.org/img/wn/"+weatherdata.weather[0].icon+"@2x.png"
             
             res.write("<h1>The temp in "+query+" is "+weatherdata.main.temp+" degree </h1>");
             res.write("<p>The weather is currently "+weatherdescript+"</p>");
             res.write("<img src="+imgsrc+">");
             
             res.send();
     })
}); */