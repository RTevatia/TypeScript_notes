interface Product {
  name: string;
  price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T) {
        this._objects.push(obj);
    }

    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj =>
            obj[property] === value
        );
    }
}


const store = new Store<Product>();
store.add({ name: "A", price: 10});

console.log(store.find("name", 'A')); // valid
console.log(store.find("price", 1)); // valid
// console.log(store.find("category", 'A')); // Invalid