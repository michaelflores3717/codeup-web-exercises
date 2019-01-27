"use strict";

var i = 2;

while (i <= 65536) {
    console.log(i);
    i = i * 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);

do {
    var conesBeingSold = Math.floor(Math.random() * 5) + 1;
    if ((allCones - conesBeingSold) >= 0) {
        console.log("Selling you " + conesBeingSold);
        allCones = allCones - conesBeingSold;
        console.log(allCones);
    }
    else if ((allCones - conesBeingSold) < 0) {
        console.log("Sorry can't sell you " + conesBeingSold + ". Not enough cones");
    }
} while (allCones > 0);

console.log("Yay I'm all out of cones!");