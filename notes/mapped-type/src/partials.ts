/*  Partial mapped type sets every property to optional.
 *  type Partial<T> = {
    [P in keyof-and-mapped T]?: T[P];
}
 *  */
interface Todo {
  title: string;
  description: string;
}

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
});

console.log(todo2);