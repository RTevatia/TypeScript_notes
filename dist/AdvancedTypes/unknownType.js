"use strict";
// TS complier will not complain on type 'any'
// function render(document: any) {
//     document.move(); // No Error
//     document.fly();
//     document.whatever();
// }
Object.defineProperty(exports, "__esModule", { value: true });
// TS complier will complain on type 'unknown'
// function render(document: unknown) {
//     document.move(); // Error
// }
function render(document) {
    if (typeof document === "string")
        console.log(document.toUpperCase());
}
render("Hello world");
//# sourceMappingURL=unknownType.js.map