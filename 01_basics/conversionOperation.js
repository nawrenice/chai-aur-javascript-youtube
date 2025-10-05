let score = true

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

/*
NOTES:
"33" => 33
"33abc" => NaN
true => 1; false => 0

*/

let isLoggedIn = "Naren"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("\n*****\n"+booleanIsLoggedIn)

/*
NOTES
1 => true; 0 => false
"" => false
"Naren" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log("\n*****\n"+typeof someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)