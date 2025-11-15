interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T) {
    this._objects.push(obj);
  }
}

let store = new Store<Product>();
store.add({
  name: "laptop",
  price: 850,
});

console.log(store);

// Three ways to extend Generic class

// First scenario - Inheriting generic type parameter down to a child class
class CompressibleStore<T> extends Store<T> {
  compress(): void {
    console.log("compressing items... ");
  }
}

let compressibleStore = new CompressibleStore<Product>();
compressibleStore.add({
  name: "laptop",
  price: 850,
});

compressibleStore.compress();

// Second scenario - constraining the generic type parameter.
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

let searchableStore = new SearchableStore<Product>();
searchableStore.add({
  name: "laptop",
  price: 850,
});

// Third scenario - fixing or terminating the generic type parameter
class ProductStore extends Store<Product> {
  filterByCatergory(category: string): Product[] {
    return this._objects.filter((product) => product.name === category);
  }
}

let productStore = new ProductStore();
productStore.filterByCatergory("electronics");
