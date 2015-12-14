var express = require('express'),
app = express();

app.listen(8000, function() {
	console.log("Locked and loaded at port 8000");
});

// WHEN a user goes to http://localhost:3000/add/num/num
app.get("/add/:numOne/:numTwo", function (req, res) {
  // setting each url property to a integer and assigned to var
  var numOne = parseInt(req.params.numOne); 
  var numTwo = parseInt(req.params.numTwo);
  //add vars
  var total = numOne + numTwo;
  //send the total back
  res.send("added " + total);
});

// WHEN a user goes to http://localhost:3000/sub/num/num
app.get("/sub/:numOne/:numTwo", function (req, res) {
  // setting each url property to a integer and assigned to var
  var numOne = parseInt(req.params.numOne); 
  var numTwo = parseInt(req.params.numTwo);
  //add vars
  var total = numOne - numTwo;
  //send the total back
  res.send("subtracted " + total);
});

// WHEN a user goes to http://localhost:3000/multi/num/num
app.get("/multi/:numOne/:numTwo", function (req, res) {
  // setting each url property to a integer and assigned to var
  var numOne = parseInt(req.params.numOne); 
  var numTwo = parseInt(req.params.numTwo);
  //add vars
  var total = numOne * numTwo;
  //send the total back
  res.send("multiplied " + total);
});

// WHEN a user goes to http://localhost:3000/div/num/num
app.get("/div/:numOne/:numTwo", function (req, res) {
  // setting each url property to a integer and assigned to var
  var numOne = parseInt(req.params.numOne); 
  var numTwo = parseInt(req.params.numTwo);
  //add vars
  var total = numOne / numTwo;
  //send the total back
  res.send("divided " + total);
});