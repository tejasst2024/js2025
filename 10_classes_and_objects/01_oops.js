const user = {
    username: "Tejas",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        console.log("Fetch user details")
        // console.log(`username: ${this.username}`);
        // console.log(`this: ${this}`);
        console.log(this);
    } 
}

class User {
    constructor(username, loginCount, signedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.signedIn = signedIn;
    }
}

// function User(username, loginCount, signedIn)  {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.signedIn = signedIn;
// }

const u1 = new User("Tejas", 10, true)
const u2 = new User("Rahul", 13, false)
console.log(u1);
console.log(u2);

console.log(user.getUserDetails());
// console.log(this);


