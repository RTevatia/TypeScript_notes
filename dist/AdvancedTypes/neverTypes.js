"use strict";
// function processEvents(): never {
//     while (true) {
//         // Read a message from a queue
//         // Process the message
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// processEvents();
// console.log("This line will never execute");
function reject(message) {
    throw new Error(message);
}
reject("Something went wrong!");
// console.log("This line will never execute");
//# sourceMappingURL=neverTypes.js.map