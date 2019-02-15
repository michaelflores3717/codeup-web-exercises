var users = [
    {
        name: "Sam",
        age: 21
    },
    {
        name: "Cathy",
        age: 34
    },
    {
        name: "Karen",
        age: 43
    }
];

var userMessage = "";
users.forEach(function(element, index, array) {
    userMessage += element.name;
});

users.forEach(function(element, index, array) {
    element.name = "John Doe";
    console.log(element.name);
});

users.forEach(function(element, index, array) {
    element.age = element.age + 1;
    console.log(element.age);
});