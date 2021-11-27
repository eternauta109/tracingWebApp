const express= require('express');
const app=express();
const mysql=require('mysql');
const cors=require("cors")
/* const dbconfig=require("./config") */

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
/* app.use(cors) */


const con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Enterpri$e109',
    database:'tracingdb'
});

app.get('/api/login',(req,res)=>{
    res.send("hello")
   console.log(req.body)

})

app.post(['/','/login'],  (req,res)=>{
    console.log(req.body)
    const username=req.body.username;
    const password=req.body.password;
    /*const sqlquery="SELECT * FROM tracingdb.login;"
     con.query(sqlquery,(err,res)=>{
        if (err) throw console.log("errore nela query",err);
        console.log(res)
    }) */
    
    const sqlquery="SELECT login.password,login.cinema FROM tracingdb.login WHERE login.username=?;"
    
    con.query(sqlquery,[username],(err,result,fields)=>{
        if (err) throw console.logS("errore nela query",err);
        /* console.log(res[0].password) */
        if (result[0].password===password){
            res.json(result[0].cinema)
            return
        }
            res.json(null)
            return
    })
    
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

