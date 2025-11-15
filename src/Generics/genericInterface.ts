// Generic interfaces for API result
interface Result<T> {
  data: T | null;
  error: string | null;
}

// Generic fetch function
function fetchData<T>(url: string): Result<T> {
  return {
    data: null,
    error: url,
  };
}

// User interface
interface User {
  username: string;
}

// Product interface
interface Product {
  title: string;
}

// Using the fetchData function with explicit type arguments
const userResult = fetchData<User>("api/users");
console.log(userResult.data?.username);

const productResult = fetchData<Product>("api/products");
console.log(productResult.data?.title);
