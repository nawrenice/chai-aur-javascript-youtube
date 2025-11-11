/* ****************************************************************************************
                    Why we don't use 'var' in modern JavaScript.
 ****************************************************************************************/
// ❌ Why we don't use 'var' in modern JavaScript 

// 1️⃣ 'var' is function-scoped, not block-scoped
if (true) {
    var a = 10; // accessible outside block — BAD!
    let b = 20; // block-scoped — GOOD!
    const c = 30; // block-scoped — GOOD!
}
console.log(a); // ✅ Works (function-scoped)
console.log(typeof b); // ❌ ReferenceError
console.log(typeof c); // ❌ ReferenceError


// 2️⃣ 'var' allows redeclaration (can overwrite variables accidentally)
var name = "Naren";
var name = "Sam"; // No error — overwrites previous value 😬
console.log(name); // Output: Sam

let city = "Springfield";
// let city = "Austin"; // ❌ Error — cannot redeclare


// 3️⃣ 'var' causes hoisting issues
console.log(num); // Output: undefined (hoisted but not initialized)
var num = 100;

// let and const are also hoisted but not accessible before declaration (TDZ)
// console.log(age); // ❌ ReferenceError
let age = 25;


// ✅ Summary Note:
// Avoid 'var' in modern JS.
// Problems: not block-scoped, allows redeclaration, causes hoisting issues.
// Use 'let' for variables that change, and 'const' for constants.


/* ****************************************************************************************
                              SCOPE IN JAVASCRIPT
 ****************************************************************************************/

// 🧭 SCOPE IN JAVASCRIPT
// 👉 Scope means "where a variable is accessible" in your code.

// 🔹 Global Scope:
// Declared outside any function or block — accessible anywhere in the program.
let globalVar = "I am global";

function showScope() {
    // 🔹 Local / Function Scope:
    // Declared inside a function — accessible only inside that function.
    let localVar = "I am local to showScope()";

    console.log(globalVar); // ✅ Accessible — global variable
    console.log(localVar);  // ✅ Accessible — within function
}

showScope();

// console.log(localVar); // ❌ Error: localVar is not defined
console.log(globalVar); // ✅ Works — global scope


// 🔹 Block Scope:
// Variables declared with let or const inside {} are block-scoped.
if (true) {
    let blockVar = "I am block-scoped";
    var notBlockScoped = "I am NOT block-scoped"; // var ignores block scope. use of var not preferred.
    console.log(blockVar); // ✅ Accessible inside block
    console.log(notBlockScoped); // ✅ Accessible inside block
}

// console.log(blockVar); // ❌ Error: blockVar not defined outside block
console.log(notBlockScoped); // ✅ Accessible outside block (var is function-scoped)


// ✅ SHORT NOTE:
// 1️⃣ Global Scope → Accessible everywhere.
// 2️⃣ Function/Local Scope → Accessible only inside that function.
// 3️⃣ Block Scope (let/const) → Accessible only inside { }.
// 4️⃣ 'var' ignores block scope — behaves unexpectedly, so avoid it!

// ***************** NESTED SCOPE *****************
console.log("\n************** NESTED SCOPE ****************\n")

function one() {
    const username = "NarenY"  // variable in parent function

    function two() {
        const website = "youtube"  // variable in child function
        console.log(username)       // ✅ child function can access parent's variable
    }

    // console.log(website)         // ❌ Error: website is not accessible outside 'two'
    two()                           // call inner function
}
one()                               // call outer function


// ************** NESTED BLOCK SCOPE EXAMPLE **************
if (true) {
    const username = "Naren"
    if (username === "Naren") {
        const website = " youtube"
        console.log(username + website)   // ✅ works
    }
    // console.log(website)               // ❌ Error: block scope
}
// console.log(username)                  // ❌ Error: not accessible outside if-block


// ************** HOISTING EXAMPLE **************
console.log("\n************** HOISTING IN FUNCTIONS **************\n")

// ✅ Function declarations are hoisted to the top of their scope
console.log(addOne(5)) // Works fine

function addOne(num) {
    return num + 2
}

// ❌ Function expressions (assigned to a variable) are NOT hoisted
// console.log(addTwo(5)) // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}

console.log("Function addTwo result:", addTwo(7)) // ✅ Works after definition


/* 
📘 SHORT NOTES:
1️⃣ Inner (nested) functions can access variables of outer functions — this is called "lexical scope".
2️⃣ Variables defined inside blocks (if, loops) are not accessible outside them (block scope).
3️⃣ Function declarations are hoisted — can be called before they appear in code.
4️⃣ Function expressions (const/let + function) are NOT hoisted — must be defined before calling.
*/
