var text = "The sum is ";
function addIt(numA, numB){
	var total = numA + numB;
	console.log(text + total);
}
addIt(8, 8);

function multiply(numA, numB){
	var total = numA * numB;
	return total;
	console.log("this is never to happen.")
}

console.log(multiply(29, 4));

var bruce = {
	arms: 2,
	bigNose: true,
	hairColor: "black",
	slogan: function(what){
		console.log(what + " I am the night");
	}
}

bruce.slogan("I am Vengance");
bruce.hairColor = "gray";

