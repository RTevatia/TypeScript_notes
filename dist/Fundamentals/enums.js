"use strict";
// const small = 1;
// const medium = 2;
// const large = 3;
Object.defineProperty(exports, "__esModule", { value: true });
// Enums (Pascal case)
// enum Size {
//   Small,
//   Medium,
//   Large,
// }
// console.log(Size.Small) // By default its value will be 0
// If want to explicitly assign values
// Number can be assigned to first enum keyword,
// rest enum keywords will have sequenced numeric values
// assigned by ts
// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// console.log(Size.Small);
// console.log(Size.Large);
// Enums can also use string values but
// each keyword must be explicitly assigned
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
})(Size || (Size = {}));
const size = Size.Small;
console.log(size);
//# sourceMappingURL=enums.js.map