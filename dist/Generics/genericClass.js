class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
let store = new Store();
store.add({
    name: "laptop",
    price: 850,
});
console.log(store);
// Three ways to extend Generic class
// First scenario - Inheriting generic type parameter down to a child class
class CompressibleStore extends Store {
    compress() {
        console.log("compressing items... ");
    }
}
let compressibleStore = new CompressibleStore();
compressibleStore.add({
    name: "laptop",
    price: 850,
});
compressibleStore.compress();
// Second scenario - constraining the generic type parameter.
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
let searchableStore = new SearchableStore();
searchableStore.add({
    name: "laptop",
    price: 850,
});
// Third scenario - fixing or terminating the generic type parameter
class ProductStore extends Store {
    filterByCatergory(category) {
        return this._objects.filter((product) => product.name === category);
    }
}
let productStore = new ProductStore();
productStore.filterByCatergory("electronics");
export {};
//# sourceMappingURL=genericClass.js.map