//++++++++++++++++++ NUMBERS ++++++++++++++++++++++
console.log("\n+++++++++++++++ NUMBERS +++++++++++++++++++")

const score = 400
console.log(score)


const balance = new Number(100)
console.log(balance)
console.log(balance.toString())     //convert number to string
console.log(balance.toFixed(2))     //for precision value eg(0.00)


const num = 23.8966
console.log(num.toPrecision(5))     //prints the required precision


const hundred = 100000
console.log(hundred.toLocaleString('en-US'))


//++++++++++++++++++++ MATHS +++++++++++++++++++++++++

console.log("\n+++++++++++++++ MATHS +++++++++++++++++++")

console.log(Math)
console.log(Math.abs(-4))       //absolute value
console.log(Math.round(4.6))    //round off 
console.log(Math.ceil(4.3))     //round off to the upper end
console.log(Math.floor(4.8))    //round off to the lower end
console.log(Math.sqrt(92))      //square root
console.log((Math.random()*10)+1)