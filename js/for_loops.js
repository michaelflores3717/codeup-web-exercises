"use strict";

function showMultiplicatonTable (number) {
    console.log(number * 1);
    console.log(number * 2);
    console.log(number * 3);
    console.log(number * 4);
    console.log(number * 5);
    console.log(number * 6);
    console.log(number * 7);
    console.log(number * 8);
    console.log(number * 9);
    console.log(number * 10);
}

showMultiplicatonTable(7);

for (var i = 1; i<=10; i++) {
   var randomNumber = Math.floor(Math.random() * 180) + 20;
   if(randomNumber % 2 == 1) {
       console.log(i + ". " + randomNumber + " is odd.")
   }
   else if (randomNumber % 2 == 0) {
       console.log(i + " :" + randomNumber + " is even.")
   }
}

for (var i = 1; i<=9; i++) {
    for (var j = 1; j<=i; j++) {
        console.log(i);
    }
}

for (var i = 100; i>=5; i = i - 5) {
    console.log(i)
}


var userNumber = prompt("Pick an odd number.");
console.log("Number to skip is " + userNumber)
for (var i = 1; i<50; i++) {
    if (i % 2 == 0) {
        continue;
    } else if (i == userNumber) {
        console.log ("Skipping " + userNumber);
        continue;
    }
    console.log(i);
}