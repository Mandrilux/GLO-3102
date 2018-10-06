import { TodoApiRequest } from './todoApiRequest.js';

export class Todo{
    constructor()
    {
        this.todoApiRequest = new TodoApiRequest();
    }

    createTodo(){
        let callback = function(data){
            document.getElementById("todos").innerHTML +="<br>"+data;
        };
        this.todoApiRequest.CreateTask(callback);
    }
}
