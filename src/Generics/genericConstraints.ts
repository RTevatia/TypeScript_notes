// Define a generic echo function
function echo<T>(value: T): T {
  return value;
}

console.log(echo("1"));

// Generic echo function with constraints
function echoConstraint<T extends number | string>(value: T): T {
  return value;
}

// console.log(echoConstraint(true)); // boolean value not assignable
console.log(echoConstraint("1"));

// Generic constrint with object
function echoObject<T extends { name: string }>(value: T): T {
  return value;
}

let result = echoObject({ name: "abc" });
console.log(result.name);

// Generic constriant with interface
interface Person {
  name: string;
}

function echoInterface<T extends Person>(value: T): T {
    return value;
}

let result2 = echoInterface({name: 'efg'});
console.log(result2.name);

// Generic constrait with class
class Person {
    constructor(public name: string) {}
}

class Customer extends Person {}

function echoClass<T extends Person>(value: T): T {
    return value;
}

let result3 = echoClass(new Person('xyz'));
console.log(result3.name);

let result4 = echoClass(new Customer('a1b1c1'));
console.log(result4.name);
