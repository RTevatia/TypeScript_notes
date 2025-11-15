interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

const p: ReadOnlyProduct = {
  name: "Book",
  price: 20,
};

console.log(p.name);

// p.name = "Pen" // Compilation error


// Common types

// type ReadOnly<T> = {
//     readonly [K in keyof T]: T[K];
// }

// type Optional<T> = {
//     [K in keyof T]?: T[K];
// }

// type Nullable<T> = {
//     [K in keyof T]: T[K] | null;
// }
