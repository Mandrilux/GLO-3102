import { TodoApiRequest } from './todoApiRequest.js';

export class Todo{
    constructor() {
        this.todoApiRequest = new TodoApiRequest();
    }

    createTodo()
    {
        let name = document.getElementsByName("name")[0].value;
        console.log(name);
        let callback = function(data){
            document.getElementById("todos").innerHTML +="<br>"+data;
        };
        this.todoApiRequest.CreateTask(callback, name);
    }
}
