function say() {
    console.log(`This is a function`);
    
}
say()

// function add(num1, num2) {
//     console.log(num1 + num2);
//     return num1 + num2
// }

function add(num1 = 23, num2) {
    return num1 + num2
}
add(2, "3") // 23
const result = add(2, null)
console.log(result);

// Rest operator 
function addPrice(...price) {
    return price;
}
console.log(addPrice(100, 2000, 550))

const user = {
    name: "Tejas",
    class: 24
}

function handleObj(anyObj) {
    console.log(`name: ${anyObj.name}, class: ${anyObj.class}`);
}
handleObj(user)

function getElementArr(getArray) {
    return getArray[0] 
}
console.log(getElementArr([200,400,600]))