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


