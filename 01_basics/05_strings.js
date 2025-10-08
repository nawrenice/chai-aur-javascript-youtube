const name = "Naren"
const repoCount = 50

console.log(name + repoCount + " count") // old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //new way (interpolation method)

const newGame = new String('xyz-Cord')

console.log(newGame[0])
console.log(newGame.__proto__);
console.log(newGame.length)
console.log(newGame.toUpperCase())
console.log(newGame.charAt(3))
console.log(newGame.indexOf('z'))

//substring
const newString = newGame.substring(0,3)
console.log(newString)

//slice
const anotherString = newGame.slice(-8,2)
console.log(anotherString)

//trim()
const secondString = "     naren    "
console.log(secondString.trim())

const url = "https://naren.com/naren%ydv"

console.log(url.replace('%','-'))
console.log(url.includes('narenp'))

const str = "the quick brown fox jumps over a lazy dog"
const words = str.split(' ')
console.log(words)