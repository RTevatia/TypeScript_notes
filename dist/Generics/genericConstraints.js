// Define a generic echo function
function echo(value) {
    return value;
}
console.log(echo("1"));
// Generic echo function with constraints
function echoConstraint(value) {
    return value;
}
// console.log(echoConstraint(true)); // boolean value not assignable
console.log(echoConstraint("1"));
// Generic constrint with object
function echoObject(value) {
    return value;
}
let result = echoObject({ name: "abc" });
console.log(result.name);
function echoInterface(value) {
    return value;
}
let result2 = echoInterface({ name: 'efg' });
console.log(result2.name);
// Generic constrait with class
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echoClass(value) {
    return value;
}
let result3 = echoClass(new Person('xyz'));
console.log(result3.name);
let result4 = echoClass(new Customer('a1b1c1'));
console.log(result4.name);
export {};
//# sourceMappingURL=genericConstraints.js.map