(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = new Object();
    person.firstName = "Mike";
    person.lastName = "Flores";
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hi I am " + person.firstName + " " + person.lastName;
    }

    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    for (var i = 0; i<shoppers.length; i++) {
        if (shoppers[i].amount >= 200 ) {
            console.log(shoppers[i].name);
            console.log(shoppers[i].amount);
            console.log(shoppers[i].amount - (shoppers[i].amount * .12));
        } else {
            console.log(shoppers[i].name);
            console.log(shoppers[i].amount);
            console.log("No discount.")
        }

    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Book1", author: {
                firstName: "Bill",
                lastName: "Bailey"
            }
        },
        {
            title: "Book2", author: {
            firstName: "Bob",
            lastName: "Barker"
            }
        },
        {
            title:"Book3", author: {
                firstName: "Santiago",
                lastName: "Flores"
            }
        },
        {
            title:"Book4", author: {
                firstName: "Dylan",
                lastName: "Free"
            }
        },
        {
            title:"Book5", author: {
                firstName: "Some",
                lastName: "Guy"
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (var i = 0; i < books.length; i++) {
        console.log("Book " + "# " + (i + 1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook (title, authorFirstName, authorLastName) {
        var book = {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        };
        return book;
    }

    console.log(createBook("Moby Dick", "Herman", "Melville"));

   /* THIS FUNCTION IS BAD AND SHOULD FEEL BAD
    function booksArray(titleOne, firstNameOne, lastNameOne, titleTwo, firstNameTwo, lastNameTwo,

                                       titleThree, firstNameThree, lastNameThree) {
        var books = [
            {
                titleOne: titleOne, authorOne: {
                    firstNameOne: firstNameOne,
                    lastNameOne: lastNameOne
                }
            },
            {
                titleTwo: titleTwo, authorTwo: {
                    firstNameTwo: firstNameTwo,
                    lastNameTwo: lastNameTwo
                }
            },
            {
                titleThree: titleThree, authorThree: {
                    firstNameThree: firstNameThree,
                    lastNameThree: lastNameThree
                }
            }
        ];
        return books;
    } */

    function booksArrayTest(title, firstName, lastName, titleTwo, firstNameTwo, lastNameTwo) {
        var books = [];
        books.push(createBook(title, firstName, lastName));
        books.push(createBook(titleTwo, firstNameTwo, lastNameTwo));
        return books;
    }

    console.log(booksArrayTest("The Jungle Book", "Rudyard", "Kipling",
        "20,000 Leagues Under the Sea", "Jules", "Verne"));



    var book1 = {
        title: "Book1",
        author: {
            firstName: "Author",
            lastName: "McAuthorson"
        }
    };

    var book2 = {
        title: "Book2",
        author: {
            firstName: "Writer",
            lastName: "McWriterson"
        }
    };



    /* Declare some book objects */

    function showBookInfo (bookOne, bookTwo) {
        var books = [];
        books.push(bookOne, bookTwo);
        return books;
    }


    for (var i = 0; i < books.length; i++) {
        var books = showBookInfo(book1, book2);
        console.log("Book " + "# " + (i + 1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }


})();
