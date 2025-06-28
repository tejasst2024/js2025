// Can contain different types
// Resizeable
// Arrays uses Shallow copy - share same reference
// Extra info : Deep Copy - does not share same ref

const arr = [0,1,2,3,4,"Name", true]

let myArr = new Array(1,2,3,4,5)

console.log(myArr[0]);      // 1
myArr.push(6)
console.log(myArr[myArr.length - 1])    // 6

myArr.unshift(7)
console.log(myArr); // [7,1,2,3,4,5,6]

myArr.shift()   //  removes 0th index
console.log(myArr); //  [1,2,3,4,5,6]

console.log(myArr.includes(12));     // false
console.log(myArr.indexOf(15)); // -1

const join = myArr.join()
console.log(join);     // 1,2,3,4,5,6
console.log(typeof(join));  // string

const sliceArr = myArr.slice(0,2);  
console.log(sliceArr);  //  [1,2]

console.log(myArr); // [1,2,3,4,5,6]

// Removes indexes from arr
const spliceArr = myArr.splice(0,2);
console.log(spliceArr); // [1,2]

console.log(myArr); // [3,4,5,6]




