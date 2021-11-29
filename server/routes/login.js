const express = require("express");
const router = express.Router();
const dbconfig = require("../config");
const mysql = require("mysql");
const ErrorHandler=require("../helper/ErrorHandler")

const con = mysql.createPool(dbconfig);

router.get(["/", "/login"], (req, res) => {
  
  res.send("login home page");
  console.log(req.body);
});

router.post(["/", "/login"], (req, res, next) => {
  /* console.log(req.body) */
  const username = req.body.username;
  const password = req.body.password;
  /*const sqlquery="SELECT * FROM tracingdb.login;"
       con.query(sqlquery,(err,res)=>{
          if (err) throw console.log("errore nela query",err);
          console.log(res)
      }) */
  console.log(username, password);
  const sqlquery =
    "SELECT login.password,login.cinema FROM tracingdb.login WHERE login.username=?;";

  try {
    con.query(sqlquery, [username], (err, result, fields) => {
      if (err) throw new ErrorHandler(0,"errore nella query del db");

      console.log(result.length);
      if (result.length === 0) return res.json(null);//next(new ErrorHandler(404,"username non presente nel db"));      
      if (result[0].password === password) {
        console.log("query result", result[0].cinema);
        /* res.status(301).redirect("/tracing") */
        res.status(200).json(result[0].cinema);
        return;
      }
      res.json(null);
      return;
    });
  } catch (error) {
    throw new ErrorHandler(0,error)
  }
});

module.exports = router;

/* const sqlquery="INSERT INTO login (username,password, cinema) VALUES ('nola','nola','nola')"
    db.query(sqlquery,(err,result)=>{
        console.log(err);
        console.log(result)
        res.send("hello fabio") 
    }) */
