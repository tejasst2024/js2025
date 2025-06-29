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

const values = myCode.forEach((item) => {
    const {langFile, langName} = item
    console.log(langName);    
    return langName
})

console.log(values);

const arr = [1,2,3,4,5,6,7]
const vals = arr.filter((num) => num % 2 != 0)
console.log(vals);


const myNums = [1,2,3,4,5,6,7,8,9]

const nums = myNums.map((num) => num + 10)
console.log(nums);


const newNums = myNums
                    .map((num) => num * 2)
                    .map((num) => num + 5)
                    .filter((num) => num % 5 === 0)
                
console.log(newNums);

const numbers = [1,2,3,4,5,6,7,8,9,10]
const sum = numbers.reduce((sum, curr) => sum + curr, 0);
console.log(sum);

