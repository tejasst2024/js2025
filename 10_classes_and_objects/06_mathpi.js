const val = Math.PI
console.log(val);


Math.PI = 4
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


// Object.defineProperty(Math,'PI',{
//         value: 4
// })
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


