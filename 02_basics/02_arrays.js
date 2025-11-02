const marvel_heroes = ["Thor", "IronMan", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

/*
concat() → returns a new array by merging arrays, original array not changed  
push() → adds elements to the end of array, modifies the original array
*/

console.log("\n*****CONCAT OPERATOR*****\n")
console.log("Original",marvel_heroes)
const all_heroes = marvel_heroes.concat(dc_heroes)
console.log("Concatinated:",all_heroes)

console.log("\n*****SPREAD OPERATOR*****\n")

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log("After Spread: ",all_new_heroes)



console.log("\n*****PUSH OPERATOR*****\n")

marvel_heroes.push(dc_heroes)   //adds dc_heroes array as a new element at the last index of marvel_heroes array.
console.log("Pushed:",marvel_heroes)
console.log("Original",marvel_heroes)  
console.log(marvel_heroes[3][1])  //since dc_heroes is the 3rd element of marvel_heroes array, this is how dc array's elements can be printed on the console.


console.log("\n*****FLAT and some other OPERATORS*****\n")

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

 


console.log("\n*****Important for interview*****\n")


console.log(Array.isArray("Naren"))     //check if its array
const nameArr = Array.from("Naren")     //convert string in array
console.log(nameArr) 


const obj = {name : "Naren"}

const nameArr1 = Array.from(Object.keys(obj)) // Convert object keys to an array → ['name']
console.log(nameArr1)

const nameArr2 = Array.from(Object.values(obj)) // Convert object values to an array → ['Naren']
console.log(nameArr2)

const nameArr3 = Array.from(Object.entries(obj))    // Convert object entries (key-value pairs) to an array → [['name', 'Naren']]
console.log(nameArr3)


// Combine the key and value as a string ('nameNaren') and split into individual characters
// Result → ['n', 'a', 'm', 'e', 'N', 'a', 'r', 'e', 'n']
const nameArr4 = Array.from(Object.keys(obj)[0] + obj.name)
console.log(nameArr4)


let score1 = 100
let score2 = 200
let score3 = 300

const scoreArr = Array.of(score1, score2, score3)
console.log(scoreArr)





