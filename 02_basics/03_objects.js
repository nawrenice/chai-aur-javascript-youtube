// Object literal → creates new independent object using {}
// Singleton → only one instance shared globally (using Object.create or pattern)


// singleton
        //-> Object.create


//object literals

// Create a Symbol (unique and immutable value)
const mySym = Symbol("key1");

// Declare an object with different property types
const JsUser = {
    name : "Naren",                        // normal key (string)
    "full name" : "Naren Yadav",           // key with space must be in quotes
    [mySym] : "myKey1",                    // Symbol key → must be in brackets []
                                            // because without brackets it becomes a string "mySym" instead of using the Symbol value
    age : 31,                              // number value
    location : "Missouri",                 // string value
    email : "naren@example.com",           // string value
    isLoggedIn : false,                    // boolean value
    lastLoginDays : ["Monday", "Friday"]   // array value
};


console.log(JsUser.email)           //not preferred way
console.log(JsUser["lastLoginDays"])        //preferred way
console.log(JsUser["full name"])
console.log(JsUser[mySym])

console.log(typeof JsUser[mySym]); // "string" → because the value stored under Symbol key is a string
console.log(typeof mySym);         // "symbol" → the key itself is a Symbol


/*
//Converting full name into an array
const fullnameArr = Array.from(JsUser["full name"])
console.log(fullnameArr)
*/


//override or change  the values:
JsUser.email = "narenice@example.com"
console.log(JsUser["email"])

//lock the values so that it cant be changed
// Object.freeze(JsUser)        //commented this line to make 64 work.
//trying to change
JsUser["full name"] = "Naren P Yadav"
JsUser.email = "narenice@outloo.com"

//print the object
console.log(JsUser)     //line 51 & 52 did not work because of object.freeze in line 49


console.log("\n*******FUNCTIONS******\n")

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this["full name"]}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())