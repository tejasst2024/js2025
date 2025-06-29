// for

let array = [1,2,3,4,5]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
 console.log(array);
 

// for of
// array of objects
let arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

let str = "Test compiler"
for (const element of str) {
    console.log(element);
}

// Maps
const map = new Map()
map.set("IN", "India")
map.set("CHN", "China")
map.set("USA", "United States Of America")

for (const [key, val] of map) {
    console.log(key, val);  
}

// for of does not work on objects
// Objects
const obj = {
    g1 : "NFS",
    g2 : "Claw"
}

// objects are not iterable with for of
// for (const element of obj) {
//     console.log(element);
// }

// for in
for (const key in obj) {
    // obj.key does not work
    console.log(key, obj[key]);
}

for (const key in arr) {
    // key is the index
    console.log(arr[key]);
}

// Does not work with maps, not iterable
// But no errors
for (const [key, val] in map) {
    console.log(key, val)
}

// foreach
arr.forEach(function(item) {
    console.log(item);
})

arr.forEach((item) => {
    console.log(item);
})

function print(item) {
    console.log(1, item);
}
arr.forEach(print)

arr.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCode = [
    {
        langName : "JS",
        langFile: ".js"
    },
    {
        langName: "Java",
        langFile: ".java"
    },
    {
        langName: "python",
        langFile: ".py"
    }
]

myCode.forEach((item) => {
    const {langFile, langName} = item
    console.log(langName);    
})

