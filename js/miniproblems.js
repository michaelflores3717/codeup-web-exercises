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

var dog =
    {
        breed: "Corgi",
        weightInPounds: 10,
        age: 5,
        color: "brown",
        sterilized: false,
        shotRecords: [{
            date: 2009,
            typeOfShot: "rabies"
        },
        {
            date: 2016,
            typeOfShot: "rabies"
        }],
        bark: function(){
            console.log("Woof!")
        },
        getOlder: function(){
             this.age += 1;
        },
        fixed: function() {
            this.sterilized = true;
        },
        vaccinate: function(typeofShot){
            var date = new Date();
            var shotObject = {
                date: date,
                typeOfShot: typeofShot
            };
            this.shotRecords.push(shotObject);
        }
    };