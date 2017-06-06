var myName = "Bruce Wayne"; //This declares the variable myName and assigns it the string value of my name 
var myAge = 24;				//This declares myAge var and sets it to a number
var myHobbies = ["Fight Crime", "Save Gotham", "Run WayneEnterprise"];	//This declares the var myHobbies and assigns it to an array of Strings.
 
var myDog = {
	name: "Ace Bat-Hound",
	age : 2,
	likes: ["Stopping crime", "Rides in the batmobile", "Bat treats"]
};//This declates the var myDog as an object and asign it various properties


//Objects properties are accessed via dot notation
console.log(myDog.name);
console.log(myDog.age);
//Items within an array can be accessed via [], arrays start counting from 0
console.log(myDog.likes[1]);


/*
console.log(myName);
console.log(myAge);
console.log(myHobbies);
*/