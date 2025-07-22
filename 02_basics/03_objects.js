// Singleton
// Object.create
const objSinglenton = new Object();

// Not singleton
// Literal
const mySym = Symbol("1234")
const obj = {
    name: "Tejas",
    age: 22,
    "group Code": "IT",
    [mySym] : "12345"
}

console.log(obj.name);  // Tejas
// console.log(obj.group Code); // Does not work
console.log(obj["group Code"]);
console.log(obj[mySym]);

obj.name = "Rahul"
// Object.freeze(obj)
obj.name = "Tejas"

console.log(obj);

obj.greeting = function() {
    console.log(`Executed - ${this.age}`);
    return "Greetings return"
}

console.log(obj);
// {
//   name: 'Tejas',
//   age: 22,
//   'group Code': 'IT',
//   greeting: [Function (anonymous)],
//   [Symbol(1234)]: '12345'
// }

console.log(obj.greeting);  // [Function (anonymous)]
console.log(obj.greeting());
// Executed -  22
// Greetings return













