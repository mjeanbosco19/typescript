// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(_url: string): Result<T> {
  return { data: null, error: null };
}
interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<User>('url');
result.data?.username;
console.log(result);
