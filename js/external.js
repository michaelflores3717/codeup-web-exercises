"use strict"
git
console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color");
alert(userInput + " is my favorite color too!");

var firstQuestion =  prompt("How many days did you rent the Little Mermaid for?");
var secondQuestion =  prompt("How many days you rent the Brother Bear for?");
var thirdQuestion =  prompt("How many days you rent the Hercules for?");
alert("Your total rental cost is " + "$" + ((firstQuestion * 3) + (secondQuestion * 3) + (thirdQuestion *3)));

var googlePayQuestion = prompt("How much did Google pay you?");
var googleHourQuestion = prompt("How many hours did you work for Google?");
var amazonPayQuestion = prompt("How much did Amazon pay you?");
var amazonHourQuestion = prompt("How many hours did you work for Amazon?");
var facebookPayQuestion = prompt("How much did Facebook pay you?");
var facebookHourQuestion = prompt("How many hours did you work for Facebook?");

alert("Your total weekly pay is " + ((googlePayQuestion * googleHourQuestion) + (amazonPayQuestion * amazonHourQuestion) +
    (facebookPayQuestion * facebookHourQuestion)));

var isFullQuestion = prompt("Is the class full? Answer true or false.");
var doesConflictQuestion = prompt("Do you have a schedule conflict? Answer true or false");
var isFull = isFullQuestion.toLowerCase() === "true";
var doesConflict = doesConflictQuestion.toLowerCase() === "true";
var isEnrolled = !isFull && !doesConflict;
alert("You are enrolled: " + isEnrolled);

var itemNumberString = prompt("How many items did you buy?");
var itemNumber = parseInt(itemNumberString);
var premiumMemberQuestion = prompt("Are you a premium member? Answer true or false");
var isPremiumMember = premiumMemberQuestion.toLowerCase() === "true";
var offerIsExpiredQuestion = prompt("Is the offer expired? Answer true or false");
var offerIsExpired = offerIsExpiredQuestion.toLowerCase() === "true";

var offerIsApplied = (itemNumber > 2 || isPremiumMember) && !offerIsExpired;
alert("Is the offer applied? " + offerIsApplied);
