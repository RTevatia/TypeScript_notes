class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking Test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
printName([
    new Student(1, "John", "Smith"),
    new Teacher("Josh", "Yeroshfsky"),
    new Principal("Mary", "Jane"),
]);
function printName(people) {
    for (let person of people)
        console.log(person.fullName);
}
export {};
//# sourceMappingURL=inheritance.js.map