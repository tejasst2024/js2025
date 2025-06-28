const tinderUser = new Object();
tinderUser.id = "id1"
tinderUser.name = "RandomName"
tinderUser.isLoggedIn = true
console.log(tinderUser);

const regularUser = {
    fullName: "RegularName",
    email: "random@gmail.com",
    dept: {
        code: "IT01",
        desc: "Information Technology"
    }
}
console.log(regularUser?.dept?.code);

const obj1 = {0: "a", 1: "b"}
const obj2 = {2: "c", 3: "d"}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);  // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

const obj4 = {...obj1, ...obj2}
console.log(obj4);  // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

const users = [
    {
        id: 1,
        name: "Tejas"
    },
    {
        id: 2,
        name: "Rahul"
    }
]

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.entries(tinderUser));    // [ [ 'id', 'id1' ], [ 'name', 'RandomName' ], [ 'isLoggedIn', true ] ]

const course = {
    courseName: "JS",
    price: 999,
    date: new Date(2025,2,22)
}

console.log(course);    // { courseName: 'JS', price: 999, date: 2025-03-21T18:30:00.000Z }

const { courseName: cName } = course;
console.log(cName);     // JS





