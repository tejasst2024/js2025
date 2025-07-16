function setUsername(obj, username) {
    obj.username = username;
}

function createUser(username, email, age) {
    setUsername(this, username)
    this.email = email;
    this.age = age;
}

function setUsername(username) {
    this.username = username;
}

function createUser(username, email, age) {
    setUsername.call(this, username)
    this.email = email;
    this.age = age;
}

const chai = new createUser("tejas", "tejas@ig.com", 24)
console.log(chai);
