// ======================================================
// 🧭 IIFE (Immediately Invoked Function Expression) in JavaScript
// ======================================================

// ✅ What is an IIFE?
// IIFE = a function that runs immediately after it is defined.
// Syntax: (function(){ ... })()  OR  (() => { ... })()

// ✅ Why do we use IIFE?
// 1. Avoid polluting the global scope (variables inside IIFE are local).
// 2. Create a private scope for variables and functions.
// 3. Run code immediately without explicitly calling the function later.


// ======================================================
// 1️⃣ Basic IIFE Example (Normal Function)
// ======================================================

(function() {
    let message = ("what is IIFE in JS?\n => IIFE stands for Immediately Invoked Function Expression. It is a function that runs immediately after defined. It avoids polluting global scope.")
    console.log(message)
})();

//Trying to access 'message' outside IIFE will fail. eg: console.log(message) outside IIFE will throw ReferenceError



// ======================================================
// 2️⃣ IIFE with Parameters
// ======================================================

(function(name){
    console.log(`Hello, ${name} from IIFE with parameter!`)
})("Naren");

// ✅ OUTPUT: Hello, Naren from IIFE with parameter!


// ======================================================
// 3️⃣ IIFE returning an object
// ======================================================

const objIIFE1 = (function() {
    let greet = "****IIFE returning an Object*****"
    let privateVar = "This is private variable."

    return{
        welcome: function(){
            return greet
        },
        username : "Sameer",

        getPrivateVar : function(){
            return privateVar
        
        }
    }


})();
console.log(objIIFE1.welcome())
console.log(objIIFE1.username)          //OUTPUT: Sameer
console.log(objIIFE1.getPrivateVar())   //OUTPUT: This is private variable
console.log(objIIFE1.privateVar)        // privateVar is not accessible directly:
                                        // console.log(objIIFE1.privateVar); // ❌ undefined




// ======================================================
// 4️⃣ IIFE with a method inside object
// ======================================================

const objIIFE2 = (function(){
    return {
        username: "Harry",
        welcome : function(){
            console.log(`welcome to IIFE2, ${this.username}!`)
        }

    }

})()

objIIFE2.welcome();


// ======================================================
// 5️⃣ IIFE with Arrow Function
// ======================================================
const arrowIIFE = (() => {
    let message = "Hello from arrow IIFE!";
    console.log(message);
})();
// ✅ OUTPUT: Hello from arrow IIFE!


// ======================================================
// 6️⃣ Standalone Arrow IIFE
// ======================================================
(() => {
    console.log("Standalone arrow IIFE runs immediately!");
})();
// ✅ OUTPUT: Standalone arrow IIFE runs immediately!


// ======================================================
// 7️⃣ IIFE with private scope and encapsulation
// ======================================================
const counter = (function() {
    let count = 0; // private variable

    return {
        increment: function() { count++; },
        getCount: function() { return count; }
    };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); // ✅ 2
// count is not accessible outside → private encapsulation


// ======================================================
// ✅ Summary of IIFE Benefits
// ======================================================
/*
1. Immediate execution of code.
2. Creates a private scope (avoids global variables).
3. Can pass parameters.
4. Can return objects or functions with private variables.
5. Often used in module patterns, libraries, and self-contained code blocks.
*/
