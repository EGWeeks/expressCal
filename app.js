var express = require('express'),
app = express();

app.listen(8000, function() {
	console.log("Locked and loaded at port 8000");
});

// WHEN a user goes to http://localhost:3000/add/num/num
app.get("/:op/:numOne/:numTwo", function (req, res) {
	var opp = req.params.op;

	// setting each url property to a integer and assigned to var
	var numOne = parseFloat(req.params.numOne); 
	var numTwo = parseFloat(req.params.numTwo);
	var total;
	if (opp === 'add') {

	  total = numOne + numTwo;

	} else if (opp === 'sub') {
  	
  	 total = numOne - numTwo;
  	
	} else if (opp === 'multi'){

		total = numOne * numTwo;

	} else if(opp === 'div'){

		total = numOne / numTwo;

	} else {
		total = "We have a problem.";
	}
	res.send("subtracted " + total);
});