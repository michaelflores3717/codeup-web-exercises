(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Mike", "Bob", "Jerry", "Jill"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(name.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i>=names.length; i++) {
        console.log(names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name) {
        console.log(name);
    })




    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function arrayReturn (array) {
        return array[0];
    }

    function arrayReturn2 (array) {
        return array[1];
    }

    function arrayReturn3 (array) {
        return array[4];
    }

    var array = ["item1", "item2", "item3", "item4", "item5"];

    console.log(arrayReturn(array));
    console.log(arrayReturn2(array));
    console.log(arrayReturn3(array));

    //IT WORKS!

})();
