type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date(1990, 5, 15) };
}

let customer = getCustomer(0);

// console.log(customer.birthday); // Error - Object possibly null

// Traditional way of fixing above error
// Drawback - repetitive and cluttered approach
// if (customer !== null && customer !== undefined)
//     console.log(customer.birthday);

// Optional property access operator
console.log(customer?.birthday);

let customer2 = getCustomer(1);
console.log(customer2?.birthday);

// Optional chaining operator
console.log(customer2?.birthday?.getFullYear());

// Optional element access operator
let customers: Customer[] | null = null;
console.log(customers?.[0]); // undefined

// Optional call operator
let log: any = (message: string | null) => console.log(message);
log?.("Hello world"); // Hello world
log?.(); // undefined
