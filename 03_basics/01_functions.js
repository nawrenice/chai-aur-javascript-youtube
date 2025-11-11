
// ✅ Function Declaration
// A simple function that prints each letter of your name
function printMyName() {
    console.log("N");
    console.log("A");
    console.log("R");
    console.log("E");
    console.log("N");
}

// ✅ Function Call
// Executes the function defined above
printMyName();

// ✅ Function to Add Two Numbers
// Takes two parameters (numA, numB), adds them, and returns the result
function addNumbers(numA, numB) {
    return numA + numB; // Return the sum
}

// ✅ Storing the returned value in a variable
const sum = addNumbers(10, 20);

// ✅ Printing the result to console
console.log("sum : ",sum); // Output: 30


// 🧩 TOPIC: Function Parameters, Default Values, and Handling Undefined

// ✅ Function with conditional check for undefined parameter
function userLoginMessage(username) {
    // If username is not provided or undefined
    if (username === undefined) { // can also be written as: if (!username)
        console.log("Please enter a username!!!");
        return;
    }
    // If username is provided, return message
    return `${username} just logged in`;
}

// ✅ Function calls
console.log(userLoginMessage("naren")); // Output: naren just logged in
console.log(userLoginMessage("Naren")); // Output: Naren just logged in

// ✅ Improved version — using default parameter value to avoid undefined
function userLoginMessage1(username = "Sam") {
    // Default value 'Sam' is used when no argument is passed
    return `${username} just logged in`;
}

// ✅ Function calls
console.log(userLoginMessage1());        // Output: Sam just logged in (default)
console.log(userLoginMessage1("Ravi"));  // Output: Ravi just logged in


/// 🧩 TOPIC: Rest Operator, Objects in Functions, and Array Arguments

// ✅ REST OPERATOR (...num1)
// Collects all remaining arguments into an array after val1 and val2
function calculateCartPrice(val1, val2, ...num1) {
    return num1; // returns array of remaining values
}

// Function call → first two values go to val1 and val2, rest go into num1
console.log(calculateCartPrice(200, 300, 500, 350, 240, 650));
// Output: [500, 350, 240, 650]

// ✅ OBJECT AS FUNCTION PARAMETER
const user = {
    username: "Naren",
    price: 199
};

// Function that takes an object and uses its properties
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// Passing the object directly
handleObject({
    username: "Sam",
    price: 399
});
// Output: Username is Sam and price is 399

// ✅ ARRAY AS FUNCTION PARAMETER
const myNewArray = [200, 400, 500, 100];

// Function that returns a specific value from the array
function returnSecondValue(getArray) {
    return getArray[3]; // returns 4th element (index starts at 0)
}

// Passing array directly while calling the function
console.log(returnSecondValue([100, 2, 343, 232]));
// Output: 232
