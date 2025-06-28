const mar_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["batman", "superman", "flash"]

// Do not use as it does not combine both the lists
// mar_heroes.push(dc_heroes)
// console.log(mar_heroes);    // [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]


// mar_heroes.concat(dc_heroes)
// console.log(mar_heroes)     // [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

// const allHeroes = mar_heroes.concat(dc_heroes)
// console.log(allHeroes)      // [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]

const allHeroes = [...dc_heroes, ...mar_heroes]
console.log(allHeroes);     // [ 'batman', 'superman', 'flash', 'thor', 'ironman', 'spiderman' ]

const arr = [1,2,[3,[4,5]],[6,7],[8,9]]
console.log(arr.flat(1));    
// [
//   1, 2, 3, [4, 5],
//   6, 7, 8, 9
// ]

console.log(arr.flat(2));    
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

const val = "Tejas"
console.log(Array.isArray(val));    // false
console.log(Array.from(val));   // [ 'T', 'e', 'j', 'a', 's' ]

console.log(Array.from({name: "Tejas"}));   // [] TBD

let val1 = 100
let val2 = 200
let val3 = 300
console.log(Array.of(val1, val2, val3));    // [ 100, 200, 300 ]



