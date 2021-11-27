const express= require('express');
const app=express();
const mysql=require('mysql');
const cors=require("cors")


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
/* app.use(cors) */

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Enterpri$e109',
    database:'tracingdb'
});


app.get('/api/login',(req,res)=>{
    res.send("hello")
   console.log(req.body)

})

app.post('/', (req,res)=>{
    console.log(req.body)
    
    /* const sqlquery="INSERT INTO login (username,password, cinema) VALUES ('nola','nola','nola')"
    db.query(sqlquery,(err,result)=>{
        console.log(err);
        console.log(result)
        res.send("hello fabio") 
    }) */

})

app.listen(3001, ()=>{
    console.log("running on port 3001");
});

