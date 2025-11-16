class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
const store = new Store();
store.add({ name: "A", price: 10 });
console.log(store.find("name", 'A')); // valid
console.log(store.find("price", 1)); // valid
export {};
// console.log(store.find("category", 'A')); // Invalid
//# sourceMappingURL=keyofOperator.js.map