// const tinderUser = new Object()      //declaring object (Singleton Object)
const tinderUser = {}                   //another way of declaring object. (Non Singleton Object)

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLogged = false

// console.log(tinderUser)          //displays the object

const regularUser = {
    email : "abc@example.com",
    fullname : {
        userfullname : {
            firstname : "Naren",
            lastname : "Yadav"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname)


const obj = {
    11: "c",
    22: "d",
};

const obj1 = {
    1: "a",
    2: "b",
};

const obj2 = {
    3: "c",
    4: "d",
};


console.log("Obj before merge : ",obj);
console.log("Obj1 before merge : ",obj1);
console.log("Obj2 before merge : ",obj2);

// ❌ This nests obj1 and obj2 as separate objects inside obj3,
// instead of merging their key-value pairs into one object.
const obj3 = {
    obj1,
    obj2
};
console.log("\nObj3 after merging obj1 & obj2 without ASSIGN : ",obj3);
// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// This is NOT the desired result because it's an object containing two inner objects,
// not a single combined object.

// ✅ To merge objects into one combined object, use Object.assign():
const obj4 = Object.assign(obj1, obj2);
console.log("Obj4 after merging obj1 & obj2 with ASSIGN : ",obj4);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// ⚠️ Note: Object.assign() modifies the first object (obj1) by adding obj2’s properties.
// So obj1 now looks the same as obj4.
console.log("Obj1 after merge : ",obj1);

// ✅ If you want to merge without changing obj, use an empty object as the target. Here {} is the target and obj,obj2 are the source.:
const obj5 = Object.assign({}, obj, obj2);
console.log("\nObj5 after merging obj & obj2 with ASSIGN and empty object as target i.e {} : ",obj5);
console.log("Obj after merge : ",obj)
// Output: { '3': 'c', '4': 'd', '11': 'c', '22': 'd' }
// obj remains unchanged.

// ✅ FINALLY — the best and modern approach for merging objects is using the SPREAD operator.
const obj6 = { ...obj, ...obj1, ...obj2 };

console.log("\n***** MERGE AFTER USING SPREAD OPERATOR *****");
console.log(obj6);

// 💬 Explanation:
// - The spread operator (...) copies all enumerable properties from source objects into a new object.
// - It does NOT modify the original objects.
// - If multiple objects have the same keys, the last one will overwrite previous ones.
// - This is a clean, concise, and recommended ES6+ way to merge objects.

console.log("\n *******array of keys and array of values******")
// array of keys and array of values example.
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))


// 🧩 Object declaration
const course = {
    coursename: "JS simply",
    price: 999,
    courseInstructor: "Hitesh"
};

// ✅ Traditional way to access a property
console.log(course.courseInstructor);

// ✅ Object Destructuring (more modern and preferred)
const { courseInstructor } = course;
console.log(courseInstructor);

// 💬 Explanation:
// - Destructuring extracts specific properties from an object into separate variables.
// - { courseInstructor } = course → creates a variable named courseInstructor and assigns it the value of course.courseInstructor.
// - Cleaner, shorter, and easier to read when using multiple properties.
