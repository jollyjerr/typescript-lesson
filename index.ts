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

    const ID = todo.id;
    const title = todo.title;
    const finished = todo.finished;

    console.log(`
        The Todo with ID: ${ID}
        Has the title: ${title}
        Is it finished? ${finished}
    `);
});