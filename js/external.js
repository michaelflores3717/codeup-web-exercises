"use strict"

console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color");
alert(userInput + " is my favorite color too!");

var firstQuestion =  prompt("How many days did you rent the Little Mermaid for?");
var secondQuestion =  prompt("How many days you rent the Brother Bear for?");
var thirdQuestion =  prompt("How many days you rent the Hercules for?");
alert("Your total rental cost is " + "$" + ((firstQuestion * 3) + (secondQuestion * 3) + (thirdQuestion *3)));

