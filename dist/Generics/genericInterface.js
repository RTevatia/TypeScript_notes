var _a, _b;
// Generic fetch function
function fetchData(url) {
    return {
        data: null,
        error: url,
    };
}
// Using the fetchData function with explicit type arguments
const userResult = fetchData("api/users");
console.log((_a = userResult.data) === null || _a === void 0 ? void 0 : _a.username);
const productResult = fetchData("api/products");
console.log((_b = productResult.data) === null || _b === void 0 ? void 0 : _b.title);
export {};
//# sourceMappingURL=genericInterface.js.map