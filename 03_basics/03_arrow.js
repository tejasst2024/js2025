const user = {
    name: "Tejas",
    welcomeMsg: function () {
        console.log(`${this.name} is currentUser`)
    }
}

user.welcomeMsg()

console.log(this)   // {} as this is run through node run time

function use() {
    console.log(`use ${this}`)
    console.log(this)
}
use()
// The first line prints
// use [object global]
// The second console log prints, this is reference from the DOM, the browser 
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
  */


const use1 = function () {
    let username = "Tejas"
    console.log(`use ${this.username}`) // undefined
    console.log(this)
}
use1()
// Do not use this in functions, only in objects


const use2 = () => {
    let username = "Tejas"
    console.log(`use ${this.username}`) // undefined
    console.log(this)   // {}
}
use2()

