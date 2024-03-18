/* Basic primitive types */
var isPopular: boolean = true;
var yearPublished: number | string = 1967; // -> this means 'yearPublished' can be a number or string
var bookName: string = "Persuasion";
var author: string = "Jane Austen";

if (isPopular) {
    console.log(`${author}'s book titled ${bookName} is very popular in ${yearPublished}`);
} else {
    console.log(`${author}'s book titled ${bookName} is not that popular in ${yearPublished}`);
};

/* Primitive types: void */
function voidChecker() {
    return;
}

console.log(voidChecker()); // -> Return undefined'

/* Primitive types: null or undefined */
function doSomething(x: string | null | number) {
    if (x === null) {
      // do nothing
    } else if (typeof x === "number") {
        console.log(`Your number is ${x}`);
    } else {
      console.log('Hello, ' + x.toUpperCase());
    }
}

doSomething(24);