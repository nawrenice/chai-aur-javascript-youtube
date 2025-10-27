let myDate = new Date()
console.log(typeof myDate)
console.log(myDate)
console.log("toString : "+myDate.toString())
console.log("toDateString : "+myDate.toDateString())
console.log("toTimeString : "+myDate.toTimeString())
console.log("toLocaleDateString : "+myDate.toLocaleDateString())
console.log("toLocaleTimeString : "+myDate.toLocaleTimeString())
console.log("toISOString : "+myDate.toISOString())


console.log("\n ****************** \n");

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());         //prints the date 

let myCreatedDate1 = new Date(2023, 1, 15, 6, 45, 56)
console.log(myCreatedDate1.toLocaleString());      //prints the date and time #LocaleString


let myCreatedDate2 = new Date("1994-02-16")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("02-15-1994")
console.log(myCreatedDate3.toLocaleString());


console.log("\n ****************** \n");

let myTimeStamp = Date.now()        //prints time in millisecond and is used to compare time we use timestamp and .getTime() as in example below
console.log(myTimeStamp)
console.log(myCreatedDate3.getTime())

console.log(Math.floor(Date.now()/1000));

console.log("\n ****************** \n");

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1)
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday: "long",
    
})







