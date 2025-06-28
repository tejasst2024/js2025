if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);

// Closures - DOM Document Object Model

// addOne(5)   //  Reference error
const addOne = function (num) {
    return num + 1
}

addTwo(5)
function addTwo(num) {
    return num + 2
}

const x = 1;
{
//   console.log(x); // ReferenceError
  const x = 2;
}


