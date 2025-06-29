// conditions - true, false, <, >, <=, >=, != , ==, === , &&, ||


// falsy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}, false == 0, false == '' , 0 == ''

// Nullish Coaliscence Operator (??):null undefined
let val1;
val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 10
console.log(val1);
val1 =  null ?? 20 ?? 40
console.log(val1);






