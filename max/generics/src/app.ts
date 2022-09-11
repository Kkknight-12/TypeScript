// Generic Utility Types
/*
Partial will name the properties inside Todo optional
so we dont need to write all of them. This can be helpful
when you are updating the interface.
*/
interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
}

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
})
console.log(todo2)

//////////////
