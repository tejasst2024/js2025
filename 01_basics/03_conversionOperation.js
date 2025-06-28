let score = 33;

console.log('Type of Score :', typeof(score))

score = "33"

let valueInNumber = Number(score);

console.log('Type of Score in Number :', typeof(valueInNumber))

// Converting to a number gives NaN
score = "33aaa"

valueInNumber = Number(score);
console.log('Score with random string: ', valueInNumber)

// Converting to a number gives 0
score = null

valueInNumber = Number(score);
console.log('Score with null: ', valueInNumber)

// Converting to a number gives NaN
score = undefined

valueInNumber = Number(score);
console.log('Score with undefined: ', valueInNumber)


// Converting to a number gives 1
score = true

valueInNumber = Number(score);
console.log('Score with boolean true: ', valueInNumber)

// Converting to a number gives 0
score = false

valueInNumber = Number(score);
console.log('Score with boolean false: ', valueInNumber)

// Converting to a boolean gives true
let isLog = 5

valueInNumber = Boolean(isLog);
console.log('isLog with 1: ', valueInNumber)

// Converting to a boolean gives false
isLog = 0

valueInNumber = Boolean(isLog);
console.log('isLog with 0: ', valueInNumber)

// Converting to a "" gives false
isLog = ""

valueInNumber = Boolean(isLog);
console.log('isLog with "": ', valueInNumber)

// Converting to a "random" gives true
isLog = "random"

valueInNumber = Boolean(isLog);
console.log('isLog with "random": ', valueInNumber)

/********************* Operations ****************/

let val1 = 2
val1 = -val1
console.log("negative : ", val1)

val1 = "2"
val1 = -val1
console.log("negative '2' : ", val1)

// Converts to a Number then performs the operation
val1 = "test2"
val1 = -val1
console.log("negative 'test2' : ", val1)



// String number with + operator
console.log("1" + "2")  //  12
console.log(1 + "2");   // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

// Do not perform these kind of conversion
console.log(+true); // 1
console.log(+"");   // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2
console.log(num3);  // 4
console.log(num1);  // 4


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"





