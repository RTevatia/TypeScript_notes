"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic fetch function
function fetchData(url) {
    return {
        data: null,
        error: url,
    };
}
// Using the fetchData function with explicit type arguments
const userResult = fetchData("api/users");
console.log(userResult.data?.username);
const productResult = fetchData("api/products");
console.log(productResult.data?.title);
//# sourceMappingURL=genericInterface.js.map