function isShortWord (word) {
    return word.length < 5;
}

function isSameLength (stringOne, stringTwo) {
    return stringOne.length === stringTwo.length;
}

function getSmallerSegment (string, number) {
    return string.substring(0, number).toLowerCase();
}

console.log(isShortWord("cat"));
console.log(isSameLength("bob", "dog"));
console.log(getSmallerSegment("animal", 2));
