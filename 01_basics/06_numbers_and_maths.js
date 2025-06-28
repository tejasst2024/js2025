const num = new Number(100)

console.log(num);   // [Number: 100]
console.log(num.toString()); // 100
console.log(typeof(num.toString())); // string

const dec = new Number(21.1934)

console.log(dec.toFixed(2));        // 21.1
console.log(dec.toPrecision(3));    // 21.2

const dec1 = new Number(121.1934)
console.log(dec1.toPrecision(3));   // 121

const dec2 = new Number(1121.1934)
console.log(dec2.toPrecision(3));   // 1.12e+3


const locNum = new Number(100000);
console.log(locNum.toLocaleString());           // 100,000
console.log(locNum.toLocaleString('en-IN'));    // 1,00,000

// --------------------------------- Math ---------------------------

console.log(Math)   // Object [Math] {}
const mathNum = new Number(4.46)
console.log(Math.abs(-4.3));        // 4.3
console.log(Math.round(mathNum));   // 4
console.log(Math.ceil(mathNum));    // 5
console.log(Math.floor(mathNum));   // 4

console.log(Math.min(1,5,2,3,4));   // 1
console.log(Math.max(1,5,2,3,4));   // 5

console.log(Math.random());   // 0.623128291223
console.log(Math.floor(Math.random()*10) + 1);   // 6

const min = 5
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1 )) + min);   // 5, 20, 6, 9







