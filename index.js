const http = require('http');
const fs=require("fs");
var requests=require("requests");


const homeFile=fs.readFileSync("home.html","utf-8");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
       requests("api.openweathermap.org/data/2.5/weather?q=Aligarh&appid=472d742d96fa4d7cb24fab2b64821274")
       .on("data",(chunk)=>
       {
           console.log(chunk);
       })
       .on("end",(err)=>
       {
           if(err) return console.log("connection closed",err);
           console.log("end");
       });
    }
});

server.listen(8000,"127.0.0.1");