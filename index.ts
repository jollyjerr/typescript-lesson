import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo;

    //Todos have the following attributes:
    //id
    //title
    //completed

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
        The Todo with id: ${id}
        Has the title: ${title}
        Is it completed? ${completed}
    `);
});