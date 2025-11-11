// ======================================================
// 🧭 JavaScript Notes — Understanding "this", Strict Mode & Lexical Scope
// ======================================================

// ✅ STRICT MODE
// "use strict" makes JavaScript stricter and helps catch mistakes.
// Example: prevents accidental global variables, and makes `this` undefined in functions.
"use strict";


// ======================================================
// 1️⃣ OBJECT METHOD EXAMPLE
// ======================================================

const user = {
    username: "naren",
    price: 999,

    // Regular function inside object → has its own 'this'
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this); // 'this' refers to the 'user' object
    }
};

// Call the method
user.welcomeMessage();   // Output: "naren, welcome to the website"
user.username = "Sam";
user.welcomeMessage();   // Output: "Sam, welcome to the website"

// Global scope 'this'
console.log(this);
/*
📘 Output:
   In Node.js → {}  (each file is a module, so top-level 'this' is empty)
   In Browser → window (the global object)
*/


// ======================================================
// 2️⃣ NORMAL FUNCTION DECLARATION
// ======================================================

console.log("\n************** NORMAL FUNCTION **********************\n");

function chai() {
    let username = "Ravi";
    console.log(this);          // undefined (in strict mode)
    // console.log(this.username); // ❌ TypeError if uncommented
}

chai();
/*
📘 Explanation:
   - 'this' depends on HOW the function is called.
   - In Node.js strict mode → undefined
   - In Browser (non-strict) → window
   - Local variables (like username) are NOT part of 'this'.
*/


// ======================================================
// 3️⃣ FUNCTION EXPRESSION
// ======================================================

console.log("\n************* FUNCTION EXPRESSION ***********************\n");

const chai1 = function () {
    let username = "Ram";
    console.log(this);          // undefined (strict mode)
    console.log(this?.username); // undefined (safe access)
};

chai1();
/*
📘 Function expressions behave the same as function declarations
   when it comes to 'this'.
   Output:
   undefined
   undefined
*/


// ======================================================
// 4️⃣ ARROW FUNCTION
// ======================================================

console.log("\n************* ARROW FUNCTION ***********************\n");

const chai2 = () => {
    let username = "Krishna";
    console.log(this);           // {} in Node.js, window in Browser
    console.log(this.username);  // undefined
};

chai2();
/*
📘 Arrow functions DO NOT have their own 'this'.
   - They take 'this' from their surrounding (lexical) scope.
   - In Node.js (top-level): 'this' → {} (empty object)
   - In Browser: 'this' → window
   - 'this.username' is undefined because 'username' is a local variable.
*/


// ======================================================
// 5️⃣ EXPLANATION OF TERMS
// ======================================================

// 🔹 Strict Mode
// "use strict" makes JS safer.
// - Stops using undeclared variables.
// - Makes 'this' in regular functions = undefined (not global object).

// 🔹 Lexical Scope
// Lexical scope = where a variable or function is written in the code.
// It defines which variables you can access from inside a function.

function outer() {
    let name = "Ravi";

    function inner() {
        console.log(name); // ✅ 'inner' can access 'name' because it's inside 'outer'
    }

    inner(); // Output: Ravi
}

outer();


// 🔹 Lexical "this" (Arrow Functions)
// Arrow functions inherit 'this' from where they are written (their outer scope).

console.log("\n######### 🔹 Lexical this (Arrow Functions) #########\n");

const example = {
    username: "Krishna",
    arrowFunc: () => {
        console.log(this); // ❌ Not 'example' — takes 'this' from outer (global/module) scope
    },
    regularFunc: function () {
        console.log(this); // ✅ Refers to 'example' object
    }
};

example.arrowFunc();   // Output: {} (Node) or window (Browser)
example.regularFunc(); // Output: { username: 'Krishna', arrowFunc: [Function], regularFunc: [Function] }


// ======================================================
// 6️⃣ SUMMARY TABLE
// ======================================================

/*
| Function Type           | Has its own 'this'? | 'this' in Node.js | 'this' in Browser | Notes |
|--------------------------|--------------------|--------------------|-------------------|-------|
| Function Declaration     | ✅ Yes             | undefined (strict) | window (non-strict) | Use for normal functions |
| Function Expression      | ✅ Yes             | undefined (strict) | window (non-strict) | Same as declaration |
| Arrow Function           | ❌ No              | {} (lexical)       | window (lexical)   | Inherits 'this' from outer scope |
*/

// ✅ Key Takeaways
// ------------------------------------------------------
// - Regular functions have their own 'this'.
// - Arrow functions inherit 'this' from where they’re written.
// - 'this' never refers to local variables (like 'username').
// - In Node.js, top-level 'this' = {} (module scope).
// - In Browser, top-level 'this' = window (global object).
// ------------------------------------------------------

console.log("\n\###########****** SUMMARY OF THIS KEYWORD FOR TYPES OF FUNCTION DECLARATION (WITHOUT OR WITHOUT OBJECT ********########n")

// ======================================================
// 🧭 Understanding `this` in Different Scenarios (Renamed)
// ======================================================

// CASE 1️⃣: Function as a METHOD inside an OBJECT
// ------------------------------------------------------
// When a function is written inside an object (a method),
// `this` refers to the object that owns that function.

const user1 = {
    username: "naren",
    welcome1: function() {
        console.log(this.username); // ✅ "naren" — 'this' refers to the 'user1' object
        console.log(this);          // ✅ the 'user1' object itself
    }
};

user1.welcome1();
/*
📘 OUTPUT:
naren
{ username: 'naren', welcome1: [Function: welcome1] }
*/


// CASE 2️⃣: Standalone FUNCTION (not inside an object)
// ------------------------------------------------------
// When a normal function is called directly (not as part of an object),
// `this` does NOT point to any object.
//
// In Node.js (with "use strict") → `this` = undefined
// In Browser (non-strict mode) → `this` = window

function greet1() {
    // console.log(this.username); // ❌ Error in Node.js (this = undefined)
    console.log(this);          // undefined (in strict mode)
}

greet1();
/*
📘 OUTPUT (Node.js strict mode):
TypeError: Cannot read properties of undefined (reading 'username')

📘 OUTPUT (Browser non-strict mode):
undefined
window
*/


// CASE 3️⃣: ARROW FUNCTION inside an OBJECT
// ------------------------------------------------------
// Arrow functions do NOT have their own `this`.
// They inherit `this` from where they were defined (lexical scope).
//
// In Node.js (top-level): surrounding 'this' = {} (empty object)
// In Browser: surrounding 'this' = window

const arrowTest1 = {
    username: "naren",
    sayHi1: () => {
        console.log(this.username); // ❌ undefined — because 'this' is NOT 'arrowTest1'
        console.log(this);          // {} in Node.js, window in Browser
    }
};

arrowTest1.sayHi1();
/*
📘 OUTPUT:
undefined
{}   <-- in Node.js
(window) <-- in Browser
*/


// CASE 4️⃣: STANDALONE ARROW FUNCTION (defined by itself)
// ------------------------------------------------------
// When an arrow function is defined by itself (not inside an object),
// it still doesn't have its own 'this'.
// It inherits 'this' from its surrounding scope.
//
// In Node.js, the surrounding scope's 'this' = {} (empty object).
// In Browser, the surrounding scope's 'this' = window.

const arrowStandalone1 = () => {
    console.log(this);          // {} in Node.js, window in Browser
    console.log(this.username); // undefined
};

arrowStandalone1();
/*
📘 OUTPUT:
{}          <-- in Node.js
window      <-- in Browser
undefined
*/


// ======================================================
// ✅ QUICK SUMMARY
// ======================================================
/*
| CASE | Function Type | Where 'this' Points | Works in Node.js? | Notes |
|------|----------------|--------------------|--------------------|-------|
| 1️⃣  | Method inside Object | The object itself | ✅ | Use this for object methods |
| 2️⃣  | Standalone Function  | undefined (strict) / window (browser) | ⚠️ Error in strict mode | Avoid using 'this' here |
| 3️⃣  | Arrow Function inside Object | Outer (lexical) scope | ✅ | Inherits from outer scope — NOT the object |
| 4️⃣  | Standalone Arrow Function | Outer (lexical) scope | ✅ | In Node: {}, In Browser: window |
*/

// ✅ Key Takeaways:
// ------------------------------------------------------
// - When a function belongs to an object → `this` = that object.
// - When a function is standalone → `this` = undefined (in Node.js strict mode).
// - Arrow functions never create their own `this`; they inherit it from where they’re defined.
// - In Node.js top-level scope → `this` = {} (empty object).
// - In Browser global scope → `this` = window (global object).
// ------------------------------------------------------


console.log("\n\###########****** END OF SUMMARY ********########n")


// ======================================================
// 7️⃣ MORE ARROW FUNCTION EXAMPLES
// ======================================================

console.log("\n****** ######## MORE ARROW FUNCTION EXAMPLES ######### ******\n");

// Example 1: Simple arrow function with return
const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};

//Imp Note: if used braces {}, we have to write retrun statement but if used parenthesis (), we dont have to write return statement.

// Simple arrow function with implicit return
const addTwoNumbers1 = (num1, num2) =>  (num1 + num2)



console.log(addTwoNumbers(15, 16)); // Output: 31
console.log(addTwoNumbers1(15, 16)); // Output: 31


// Example 2: Implicit return (no 'return' keyword needed)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20


// Example 3: Returning an object → wrap in parentheses
const createUser = (name, age) => ({ name, age });
console.log(createUser("Naren", 25)); 
// Output: { name: 'Naren', age: 25 }


// Example 4: Arrow function inside an array method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


// Example 5: Arrow function without parameters
const sayHello = () => console.log("Hello World!");
sayHello(); // Output: Hello World!


// Example 6: Arrow function with default parameter
const greet = (name = "Guest") => console.log(`Welcome, ${name}!`);
greet();           // Output: Welcome, Guest!
greet("Naren");    // Output: Welcome, Naren!


// ✅ Final Tip
// ------------------------------------------------------
// - Use REGULAR functions when you need your own 'this' (e.g., in objects or classes).
// - Use ARROW functions for short, simple, callback-style logic (like map, filter, reduce).
// ------------------------------------------------------
