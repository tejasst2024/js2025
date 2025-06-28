const date = new Date()
console.log(date)   // 2025-06-28T08:36:24.846Z
console.log(date.toString()) // Sat Jun 28 2025 14:07:23 GMT+0530 (India Standard Time)
console.log(date.toDateString())    // Sat Jun 28 2025
console.log(date.toLocaleString())  // 6/28/2025, 2:08:10 PM
console.log(typeof(date));  // object

const myDate = new Date(2025, 0, 23)    // month index starts from 0
console.log(myDate.toString()); // Thu Jan 23 2025 00:00:00 GMT+0530 (India Standard Time)


const stringDate = new Date("2025-01-16")
console.log(stringDate.toDateString()); // Thu Jan 16 2025

console.log(stringDate.toLocaleDateString('default',{
    weekday: "long",
}));                // Thursday



