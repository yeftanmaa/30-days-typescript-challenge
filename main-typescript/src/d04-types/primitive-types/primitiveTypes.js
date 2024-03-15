/* Basic primitive types */
var isPopular = true;
var yearPublished = 1967; // -> this means 'yearPublished' can be a number or string
var bookName = "Persuasion";
var author = "Jane Austen";
if (isPopular) {
    console.log("".concat(author, "'s book titled ").concat(bookName, " is very popular in ").concat(yearPublished));
}
else {
    console.log("".concat(author, "'s book titled ").concat(bookName, " is not that popular in ").concat(yearPublished));
}
;
/* Primitive types: void */
function voidChecker() {
    return;
}
console.log(voidChecker()); // -> Return undefined'
/* Primitive types: null or undefined */
function doSomething(x) {
    if (x === null) {
        // do nothing
    }
    else if (typeof x === "number") {
        console.log("Your number is ".concat(x));
    }
    else {
        console.log('Hello, ' + x.toUpperCase());
    }
}
doSomething(24);
