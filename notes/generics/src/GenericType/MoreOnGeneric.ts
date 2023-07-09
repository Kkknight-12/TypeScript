/* https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript
 *
 * Generics appear in TypeScript code inside angle brackets, in the format <T>, where
 * T represents a passed-in type. <T> can be read as a generic of type T. In this case,
 * T will operate in the same way that parameters work in functions, as placeholders for a
 * type that will be declared when an instance of the structure is created. The generic
 * types specified inside angle brackets are therefore also known as generic type
 * parameters or just type parameters. Multiple generic types can also appear in a
 * single definition, like <T, K, A>.
 * */

/* https://www.delftstack.com/howto/typescript/typescript-fetch/ */
interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// function will receive a Type in angle bracket and a parameter
// function will return a Promise of type we receive in angle bracket
async function fetchApi<T>(resourceUrl: string): Promise<T> {
  const response = await fetch(resourceUrl);

  return response.json();
}

// the data which we get back will be of type Todo
fetchApi<Todo>("https://jsonplaceholder.typicode.com/posts/1").then((data) =>
  console.log(
    "data \n",
    `id: ${data.id}
    title: ${data.title}
    content: ${data.body}`
  )
);