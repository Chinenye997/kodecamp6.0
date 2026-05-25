// Task 1

// ======================================================
// QUESTION 1
// Write a JavaScript statement that reverses a string
// ======================================================

// Declare a string variable
let text = "Hello";

// Reverse the string using split(), reverse(), and join()
let reversedText = text.split("").reverse().join("");

// Print the reversed string
console.log(reversedText);


// =================================
// QUESTION 2A
// Short note on String data type
// ==================================

// The String data type is used to store text.
// Strings are written inside single quotes ('')
// or double quotes ("").

// Example of a string
let name = "Gift";

// 3 methods used with String data type

// 1. toUpperCase() -> Converts text to uppercase
console.log(name.toUpperCase());

// 2. toLowerCase() -> Converts text to lowercase
console.log(name.toLowerCase());

// 3. charAt() -> Returns character at a specific position
console.log(name.charAt(0));



// =================================
// QUESTION 2B
// Short note on Number data type
// ==================================

// The Number data type is used to store numeric values.
// It can be whole numbers or decimal numbers.

// Example of a number
let score = 95.678;

// 3 methods used with Number data type

// 1. toFixed() -> Rounds number to specified decimal places
console.log(score.toFixed(2));

// 2. toString() -> Converts number to string
console.log(score.toString());

// 3. Number.isInteger() -> Checks if value is an integer
console.log(Number.isInteger(score));



// ================================
// QUESTION 3
// Grade remark using if statement
// ==================================

let marks = 75;

// Check if score is valid
if (marks >= 70 && marks <= 100) {

    console.log("Excellent");

} else if (marks >= 60 && marks <= 69) {

    console.log("Very good");

} else if (marks >= 50 && marks <= 59) {

    console.log("Good");

} else if (marks >= 40 && marks <= 49) {

    console.log("Poor");

} else if (marks >= 0 && marks <= 39) {

    console.log("Very poor");

} else {

    console.log("Invalid score");

}