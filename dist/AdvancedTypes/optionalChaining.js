var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date(1990, 5, 15) };
}
let customer = getCustomer(0);
// console.log(customer.birthday); // Error - Object possibly null
// Traditional way of fixing above error
// Drawback - repetitive and cluttered approach
// if (customer !== null && customer !== undefined)
//     console.log(customer.birthday);
// Optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customer2 = getCustomer(1);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday);
// Optional chaining operator
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional element access operator
let customers = null;
console.log(customers === null || customers === void 0 ? void 0 : customers[0]); // undefined
// Optional call operator
let log = (message) => console.log(message);
log === null || log === void 0 ? void 0 : log("Hello world"); // Hello world
log === null || log === void 0 ? void 0 : log(); // undefined
export {};
//# sourceMappingURL=optionalChaining.js.map