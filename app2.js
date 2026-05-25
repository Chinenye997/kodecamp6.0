// Task 2

// ======================================================
// QUESTION 1
// Function that flattens a 2D array without using .flat()
// ======================================================

// Create a function that accepts a 2D array
function flattenArray(arr) {

    // Create an empty array to store final result
    let result = [];

    // Loop through each inner array
    for (let i = 0; i < arr.length; i++) {

        // Loop through elements inside the inner array
        for (let j = 0; j < arr[i].length; j++) {

            // Add each element into the result array
            result.push(arr[i][j]);
        }
    }

    // Return the flattened array
    return result;
}

// Example input
let numbers = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

// Print result
console.log(flattenArray(numbers));

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ==================================================
// QUESTION 2
// Function that returns shared elements in 3 arrays
// ===================================================

// Create a function that accepts 3 arrays
function sharedElements(arr1, arr2, arr3) {

    // Create an empty array to store common elements
    let result = [];

    // Loop through first array
    for (let i = 0; i < arr1.length; i++) {

        // Store current element
        let current = arr1[i];

        // Check if element exists in second and third arrays
        if (arr2.includes(current) && arr3.includes(current)) {

            // Avoid duplicate entries in result
            if (!result.includes(current)) {

                // Add shared element to result
                result.push(current);
            }
        }
    }

    // Return the array of shared elements
    return result;
}

// Example input
let firstArray = [1, 2, 3, 4];
let secondArray = [3, 4, 5];
let thirdArray = [3, 4, 5, 6];

// Print result
console.log(sharedElements(firstArray, secondArray, thirdArray));



// ===============================================
// QUESTION 3
// Function that returns unique elements
// Do not use Set or filter()
// ===============================================

// Create a function that accepts an array
function uniqueElements(arr) {

    // Create an empty array for unique values
    let result = [];

    // Loop through input array
    for (let i = 0; i < arr.length; i++) {

        // Check if current element already exists
        if (!result.includes(arr[i])) {

            // Add unique element into result
            result.push(arr[i]);
        }
    }

    // Sort the array in ascending order
    result.sort((a, b) => a - b);

    // Return unique array
    return result;
}

// Example input
let values = [1, 3, 2, 3, 4, 5, 4, 2, 5, 6];

// Print result
console.log(uniqueElements(values));




// ======================================================
// QUESTION 4
// Convert kebab-case string to camelCase
// ======================================================

// Create a function that accepts a string
function kebabToCamel(text) {

    // Split string using dash (-)
    let words = text.split("-");

    // Start with the first word unchanged
    let result = words[0];

    // Loop through remaining words
    for (let i = 1; i < words.length; i++) {

        // Convert first letter to uppercase
        let capitalized =
            words[i].charAt(0).toUpperCase() + words[i].slice(1);

        // Add modified word to result
        result += capitalized;
    }

    // Return camelCase string
    return result;
}

// Example input
let inputText = "hello-there";

// Print result
console.log(kebabToCamel(inputText));