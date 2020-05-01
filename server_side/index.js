const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mysql');
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "bluejeans123",
  database: "attendance_tracker"
});

con.connect(function(err) {
  if (err) throw err;
});

app.post('/request', function (req, res) {

  const select = "SELECT employee_id " +
    "FROM request " +
    "WHERE employee_id = " + req.body['empid'];

  con.query(select, function (err, result, fields) {
    if (err){
      res.json({'status': 'error'});
    }else{
      if(result.length === 0){

        const insert = "INSERT " +
          "INTO request (employee_id, fname, lname, date_of_birth, password) " +
          "VALUES (" + req.body['empid'] + ", '" + req.body['fname'] + "', '" + req.body['lname'] + "', " +
          "DATE '" + req.body['dob']  + "', '" +  req.body['password'] + "')";

        con.query(insert, function (err, result) {
          if (err) {
            res.json({'status': 'error'});
          }else{
            res.json({'status': 'success'})
          }
        });
      }else if(result.length === 1){
        res.json({'status': 'exist', 'id': req.body['empid']});
      }
    }
  });
});

app.listen(3000, function () {
  console.log("Connected at port 3000");
})
