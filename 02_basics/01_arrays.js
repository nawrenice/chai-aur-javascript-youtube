


const myArr = [0,1,2,3,4,5]     //declare an array
console.log(myArr[2])

const myHeroes = ["Krrish", "Spiderman", "Batman"]
console.log(myHeroes)       //print all elements of an array

const myArr2 = new Array(1,2,3,4,5,6)      //another way to declare an array 
console.log(myArr2);

// ARRAY METHODS    

myArr2.push(10)         //to add an element at last index
console.log(myArr2)

myArr2.pop()         //to remove last element at last index
console.log(myArr2);

myArr2.unshift(15)      //add element at 0th index
console.log(myArr2)

myArr2.shift()          //remove element at 0th index
console.log(myArr2)


console.log(myArr2.includes(6))     //includes checks if that element is present in the array or not
console.log(myArr2.indexOf(5))     //indexOf finds the index of given element.


const newArr = myArr2.join()       
console.log(myArr2)
console.log(newArr)
console.log(typeof(newArr))

/*
#slice and splice important interview question
Difference:
slice(start,end) → copies selected elements, doesn’t modify original array
splice(start,count) → removes/replaces elements, directly changes original array
*/

console.log("Original:", myArr2)

const myn1 = myArr2.slice(1,3)

console.log("Slice:",myn1)
console.log("After Slice:", myArr2)

const myn2 = myArr2.splice(1,3)

console.log("Splice:",myn2)
console.log("After Splice:", myArr2)




