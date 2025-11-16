// let quant: 50;
// quant = 50; // Valid
// quant = 51; // Error: Type '51' is not assignable to type '50'
// Combine multiple literals using a Union type
let quant;
quant = 50; // Valid
// quant = 100; // Valid
// quant = 25; // Error
console.log(quant);
let quantity = 50; // Valid
quantity = 100; // Valid
// let quantity: Quantity = 55; // Error
console.log(quantity);
let length = "cm"; // Valid
length = "inch"; // Valid
// let length: Metric = "meters"; // Error
console.log(length);
export {};
//# sourceMappingURL=literalTypes.js.map