import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// interface
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response) => {
    // stating that response.data will have same structure as described in our Todo
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logoTodo(id, title, completed);
});

const logoTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? :${completed}`);
};
