"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertWeight(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    return parseFloat(weight) * 2.2;
}
console.log(convertWeight(70));
console.log(convertWeight("70kg"));
//# sourceMappingURL=unionTypes.js.map