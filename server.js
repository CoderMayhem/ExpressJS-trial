const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var wt = Number(req.body.wt);
  var ht = Number(req.body.ht);
  var bmi = wt + ht; //I don't know the formula. Suck on that.

  res.send("The bmi is : "+bmi);
});


app.listen(8000);
