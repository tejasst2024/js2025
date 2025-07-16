let arr = [1,2,3,4]

Object.prototype.tejas = function() {
    console.log("tejas is in array")
}

arr.tejas()


const teachers = {
    school: "KV"
}

const primaryTeacher = {
    classes: "1,2,3",
    __proto__: teachers
}

const secondaryTeacher = {
    classes: "4,5,6,7"
}

secondaryTeacher.__proto__ = teachers;

const highTeacher = {
    classes: "8,9,10"
}

Object.setPrototypeOf(highTeacher, teachers)

console.log(highTeacher.school)


let chai = "chai    "

String.prototype.trueLength = function() {
    console.log(`Truelength: ${this.trim().length}`)
}

chai.trueLength();


