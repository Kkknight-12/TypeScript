/*  Partial mapped type sets every property to optional.
 *  type Partial<T> = {
    [P in keyof T]?: T[P];
}
 *  */
interface Todo {
  title: string;
  description: string;
}

// Example 1
// writing partial type with help of mapped type
type OwnPartial<T> = {
  // map over all keys and make them optional
  [P in keyof T]?: T[P];
};

type OptionalTodo = OwnPartial<Todo>;

function printTodo(todo: OptionalTodo) {
  return todo;
}

console.log(printTodo({ title: "Something" }));
console.log(printTodo({ description: "Something Else" }));
// console.log(printTodo({ otherKeys: "wont work" }));

// Example 2
// using built in partial function
/*
 *  parameter one take Todo as its type
 *  parameter two also take todo as
 *  argument but all the properties are not optional
 * we can either pass one two or none
 * */

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
  // Object literal may only specify known properties
  // canNotAddNewKey: 'doesn't work'
});

console.log(todo2);