//INTERVIEW QUESTIONS

//TYPES OF DATATYPES:

/* 1- PRIMITIVE DATATYPE --- (CALL BY VALUE)

 TOTAL - 7
String
Number
Boolean
Null
Undefined
Symbol
BigInt

*/

const name = "Naren"
const score = 100
const isIn = true
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')     //thought they have same values, they're not same

console.log("Are id and anotherId same ?")
console.log(id === anotherId)

const BigNum = 123456n



/* 2- NON-PRIMITIVE (REFERENCE) DATATYPE ----(CALL BY REFERENCE)

Arrays
Objects
Functions

*/
const heroes = ["Shaktiman", "Superman", "Krrish"];


let myObj = {
    name : "Naren",
    age : 21,
}

const myFuntion = function(){
    console.log("Hello World")
}

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/