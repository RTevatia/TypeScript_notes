// function calculateTax(income: number, taxYear?: number): number {
//     if ((taxYear || 2022) < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000));
console.log(calculateTax(10000, 2021));
export {};
//# sourceMappingURL=functions.js.map