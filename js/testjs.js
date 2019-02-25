function concat (inputOne, inputTwo) {
    if (typeof inputOne == "string" && typeof inputTwo == "string") {
        return inputOne + inputTwo;
    } else if (typeof inputOne == "number" && typeof inputTwo == "number") {
        var numberInputOne = inputOne.toString;
        var numberInputTwo = inputTwo.toString;
        return numberInputOne + numberInputTwo;
    }
}

console.log(concat(4, 2));


let i = 50;

while (i > 0) {
    console.log(i);
    i--;
}

for (var x = 50; x > 0; x--) {
    console.log(x);
}

var y = 50;

do {
    console.log(y);
    y--;
} while (y > 0);
