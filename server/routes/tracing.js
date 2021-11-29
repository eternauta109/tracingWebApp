const express = require("express");
const router = express.Router();
const dbconfig = require("../config");
const mysql = require("mysql");

const con = mysql.createPool(dbconfig);

router.get("/tracing", (req, res) => {
  res.send("tracing page");
  console.log(req.body);
});

router.post("/tracing", (req, res, next) => {
  console.log(req.body)
  const reg = req.body.registration;

  console.log("registration",reg.fiscale);

  const sqlquery = "INSERT INTO tracing (codfisc,ticket,agregate,phone,date) VALUES(?,?,?,?,?);";

  try {
    con.query(
      sqlquery,
      [reg.fiscale,reg.ticket, reg.nameClient, reg.numberPhone,  reg.date],
      (err, result, fields) => {
        if (err) console.log(err);

        console.log(result.length);
        if (result.length === 0) return res.json(null); //next(new ErrorHandler(404,"username non presente nel db"));
        
        
        return;
      }
    );
  } catch (error) {
    throw new ErrorHandler(0, error);
  }
});

module.exports = router;
