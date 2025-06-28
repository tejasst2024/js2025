// Primitive
// 7 types: string, number, boolean, null, undefined, symbol, bigint 

// Reference 
// Non-primitive
// Array, Objects, functions 


// Early time C
//     - reserve mem
//     - dealloc mem

// Javascript
//     - automatic garbage collection
//     - memAlloc

// Stack
//     - Primitive
//     - org value

// Heap
//     - Non-Primitive
//     - ref

let name = "tejas"
let newName = name
console.log("Name: ", name);
console.log("NewName: ", newName);

newName = "newTejas"
console.log("Name: ", name);
console.log("NewName: ", newName);


let user1 = {
    name: "Tejas"
}
let user2 = user1

console.log("User1: ", user1);
console.log("User2: ", user2);

user2.name = "NotTejas" 

console.log("User1: ", user1);
console.log("User2: ", user2);


 