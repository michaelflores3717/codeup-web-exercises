"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var numberConfirm = confirm("Would you like to enter a number?");
var number;

function promptCheck() {
    if (numberConfirm) {
        number = prompt("What is your number?");
        number = parseInt(number, 10);
        return true;
    } else {
        alert("Goodbye.");
        return false;
    }
}

function numberCheck() {
    if (isNaN(number)) {
        alert("You did not enter a number!")
        mainFunction();
        return false;
    } else if (number % 2 == 1 || number % 2 == -1) {
        alert("You entered an odd number.");
        return true;
    } else {
        alert("You entered an even number.");
        return true;
    }
}

function numberPlusOneHundred() {
        var totalNumber = number + 100;
        alert(totalNumber);
    }

function numberIsPositive() {
    if (number > 0) {
        return alert("Your number is positive.");
    } else {
        return alert("Your number is negative.");
        }
    }

function mainFunction() {
    if (promptCheck()) {
        if (numberCheck()) {
            numberPlusOneHundred();
            numberIsPositive();
        } else {
            return;
        }
    } else {
        return;
    }
}

mainFunction();


/* ########################################################################## */

        /**
         * TODO:
         * Create a function named `analyzeColor` that accepts a string that is a color
         * name as input. This function should return a message that related to that
         * color. Only worry about the colors defined above, if the color passed is not
         * one of the ones defined above, return a message that says so
         *
         * Example:
         *  > analyzeColor('blue') // returns "blue is the color of the sky"
         *  > analyzeColor('red') // returns "Strawberries are red"
         *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
         *
         * You should use an if-else-if-else block to return different messages.
         *
         * Test your function by passing various string literals to it and
         * console.logging the function's return value
         */

function analyzeColor(colorName) {
    if (colorName == "blue") {
        return colorName + " is the color of the ocean";
    } else if (colorName == "red") {
        return colorName + " is the color of roses";
    } else if (colorName == "cyan") {
        return colorName + " is a weird color";
    } else {
        return "This is not a color I know";
    }
}

console.log(analyzeColor("blue"));

//Function above seems to work just fine - MF

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        //;
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch(randomColor) {
    case "blue":
        alert(randomColor + " is the color of the ocean");
        break;
    case "red":
        alert(randomColor + " is the color of roses");
        break;
    case "cyan":
        alert(randomColor + " is a weird color");
        break;
    default:
        alert("I don't know this color");
        break;

}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

var color = prompt("Enter a color please");
alert(analyzeColor(color));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (luckyNumber, totalAmount) {
    switch(luckyNumber) {
        case 0:
            var chargedAmount = totalAmount;
            return chargedAmount
            break;
        case 1:
            chargedAmount =  totalAmount - (totalAmount * 0.1);
            return chargedAmount;
            break;
        case 2:
            chargedAmount =  totalAmount - (totalAmount * 0.25);
            return chargedAmount;
            break;
        case 3:
            chargedAmount =  totalAmount - (totalAmount * 0.35);
            return chargedAmount;
            break;
        case 4:
            chargedAmount =  totalAmount - (totalAmount * 0.5);
            return chargedAmount;
            break;
        case 5:
            return 0;
            break;
        default:
            alert("Your lucky number is not valid");
            break;
    }
}

console.log(calculateTotal(0,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(5,100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What is your bill total?");
alert("Your lucky number was " + luckyNumber);
alert("You said your bill total was " + totalBill);
var newBillTotal = calculateTotal(luckyNumber, totalBill);
alert("Your discounted price is now " + newBillTotal);
