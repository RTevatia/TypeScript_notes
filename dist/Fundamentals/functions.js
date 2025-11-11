"use strict";
// function calculateTax(income: number, taxYear?: number): number {
//     if ((taxYear || 2022) < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10_000));
console.log(calculateTax(10_000, 2021));
//# sourceMappingURL=functions.js.map