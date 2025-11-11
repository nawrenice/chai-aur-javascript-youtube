// ======================================================
// 🧭 JAVASCRIPT EXECUTION PROCESS — INTERVIEW NOTES
// ======================================================

// ✅ What happens when you run JavaScript code?
// JavaScript executes code in two main phases for each context:
//
// 1️⃣ MEMORY CREATION PHASE (also called "Creation Phase" or "Hoisting Phase")
// 2️⃣ EXECUTION PHASE (also called "Code Execution Phase")
//
// JavaScript runs inside an "Execution Context".
// There is always ONE Global Execution Context (GEC) when the file starts running.


// ======================================================
// 1️⃣ GLOBAL EXECUTION CONTEXT (GEC)
// ======================================================
//
// Created when a JS program starts.
// Two things happen:
//   🧠 1. Memory Creation Phase — space is allocated for variables & functions.
//   ⚙️ 2. Execution Phase — code runs line by line.
//
// GEC sits inside the CALL STACK.

console.log("========== START ==========");

var a = 10;
let b = 20;

function add(num1, num2) {
    var result = num1 + num2;
    return result;
}

let sum = add(5, 10);
console.log("Sum is:", sum);

/*
🧩 Step-by-step:

📍 PHASE 1 — MEMORY CREATION (Hoisting Phase)
---------------------------------------------
Memory is allocated before execution:
a → undefined
b → uninitialized (because of let)
add → entire function stored

📍 PHASE 2 — EXECUTION PHASE
---------------------------------------------
a = 10
b = 20
sum = add(5, 10)

➡️ When add() is called:
   - A new FUNCTION EXECUTION CONTEXT (FEC) is created.
   - It has its own Memory + Execution phases.

Inside add():
   Memory phase:
     num1 → undefined
     num2 → undefined
     result → undefined
   Execution phase:
     num1 = 5
     num2 = 10
     result = 15
     return 15

The FEC is destroyed after returning, and control goes back to GEC.
*/


// ======================================================
// 2️⃣ CALL STACK (also called EXECUTION STACK)
// ======================================================
//
// JS manages execution using a stack (LIFO - Last In, First Out).
//
// Example:

function first() {
    console.log("Inside first()");
    second();
}

function second() {
    console.log("Inside second()");
}

first();

/*
📘 CALL STACK VISUALIZATION:

1️⃣ Global() is created
   ↓
2️⃣ first() is called → new Execution Context for first()
   ↓
3️⃣ Inside first(), second() is called → new Execution Context for second()
   ↓
4️⃣ second() finishes → popped from stack
   ↓
5️⃣ first() finishes → popped from stack
   ↓
6️⃣ Global() finishes → popped → stack empty ✅
*/


// ======================================================
// 3️⃣ NEW VARIABLE ENVIRONMENT + EXECUTION THREAD
// ======================================================
//
// Each time a function is called:
// - A new Execution Context is created.
// - It has its own "Variable Environment" (memory for variables).
// - JS engine creates a new "Thread of Execution" (the path of code running).
//
// When the function ends, its context is deleted to free memory.

function multiply(x, y) {
    let product = x * y;
    return product;
}

let result = multiply(3, 4);
console.log("Result:", result);

/*
📘 When multiply(3, 4) is called:
- A new Execution Context is created.
- JS allocates memory for x, y, product.
- Executes the code → returns 12 → context is destroyed.
*/


// ======================================================
// 4️⃣ HOISTING
// ======================================================
//
// In Memory Creation Phase, variable & function declarations are "hoisted".
// - Variables declared with var are initialized as undefined.
// - Variables declared with let and const are not accessible (in TDZ - Temporal Dead Zone).
// - Functions are fully hoisted (can be called before declaration).

console.log(hoistedVar); // ✅ undefined (var is hoisted)
var hoistedVar = 50;

// console.log(hoistedLet); // ❌ ReferenceError (let is in TDZ)
let hoistedLet = 100;

hoistedFunc(); // ✅ works (function is hoisted)
function hoistedFunc() {
    console.log("This function is hoisted!");
}


// ======================================================
// 5️⃣ GLOBAL OBJECT + 'this'
// ======================================================
//
// In browsers → Global object = window
// In Node.js → Global object = global or {}
// Inside GEC, 'this' refers to the global object.

console.log("Global this:", this);


// ======================================================
// 6️⃣ SUMMARY (INTERVIEW QUICK RECAP)
// ======================================================

/*
🧠 JAVASCRIPT EXECUTION PROCESS SUMMARY

1️⃣ JS code runs inside an Execution Context.
   - The first one is the Global Execution Context (GEC).

2️⃣ Each Execution Context has two parts:
   - MEMORY CREATION PHASE: variables and functions are hoisted.
   - EXECUTION PHASE: code runs line by line.

3️⃣ Function calls create a NEW EXECUTION CONTEXT.
   - Each context has its own variable environment & execution thread.

4️⃣ CALL STACK keeps track of all active execution contexts.
   - When a function finishes, it is removed (popped) from the stack.

5️⃣ HOISTING:
   - var → undefined
   - let / const → TDZ (Temporal Dead Zone)
   - function → fully hoisted

6️⃣ 'this' keyword in Global Context:
   - Browser → window
   - Node.js → {}

✅ Interview Tip:
Be ready to explain the order of execution and what happens in memory & execution phases using simple examples like:
   var a = 10;
   function add() {...}
   add();
*/


// ======================================================
// 7️⃣ QUICK DEMO SUMMARY IN ACTION
// ======================================================

console.log("\n======== DEMO START ========");

var x = 1;
function demo() {
    var y = 2;
    function inner() {
        var z = 3;
        console.log(x + y + z); // ✅ 6
    }
    inner();
}
demo();

console.log("======== DEMO END ========");

/*
📘 EXECUTION ORDER:
1. GEC created → x, demo() in memory.
2. x = 1
3. demo() called → new Execution Context for demo.
4. demo memory: y, inner()
5. y = 2
6. inner() called → new Execution Context for inner.
7. inner memory: z
8. z = 3 → prints 6
9. inner() finishes → popped
10. demo() finishes → popped
11. GEC finishes → stack empty ✅
*/


/*
QUICK CONCEPT MAP FOR REVISION:
| Concept                              | Description                                             |
| ------------------------------------ | ------------------------------------------------------- |
| **Global Execution Context (GEC)**   | Default context created when JS starts running          |
| **Memory Creation Phase**            | Variables and functions are allocated memory (hoisting) |
| **Execution Phase**                  | Code runs line by line                                  |
| **Function Execution Context (FEC)** | Created each time a function is invoked                 |
| **Variable Environment**             | Stores variables and functions inside each context      |
| **Execution Thread**                 | Path of execution for that context                      |
| **Call Stack**                       | Stack that keeps track of active contexts               |
| **Hoisting**                         | Process of moving declarations to top in memory phase   |

*/