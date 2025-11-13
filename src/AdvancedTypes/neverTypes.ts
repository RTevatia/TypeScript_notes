// function processEvents(): never {
//     while (true) {
//         // Read a message from a queue
//         // Process the message
//     }
// }

// processEvents();
// console.log("This line will never execute");

function reject(message: string): never {
    throw new Error(message);
}

reject("Something went wrong!");
// console.log("This line will never execute");