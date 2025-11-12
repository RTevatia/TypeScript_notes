// let quant: 50;

// quant = 50; // Valid
// quant = 51; // Error: Type '51' is not assignable to type '50'

// Combine multiple literals using a Union type
let quant: 50 | 100;
quant = 50; // Valid
// quant = 100; // Valid
// quant = 25; // Error
console.log(quant);

// Define custom type alias for the literal combination
type Quantity = 50 | 100;
let quantity: Quantity = 50; // Valid
quantity = 100; // Valid
// let quantity: Quantity = 55; // Error

console.log(quantity);

// Literal types for strings
type Metric = "cm" | "inch";

let length: Metric = "cm"; // Valid
length = "inch"; // Valid
// let length: Metric = "meters"; // Error

console.log(length);

