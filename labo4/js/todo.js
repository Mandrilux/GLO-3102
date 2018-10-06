import { TodoApiRequest } from './todoApiRequest.js';

export class Todo{
    constructor() {
        this.todoApiRequest = new TodoApiRequest();
    }

    createTodo()
    {
        let name = document.getElementsByName("name")[0].value;
        if (name.length > 0)
        {
            let callback = function(data){
                let dataparse = JSON.parse(data);
                document.getElementById("todos").innerHTML +="<br>"+dataparse.name+"<a href='#' id='deleteButton'>Delete</a>";
            };
            this.todoApiRequest.CreateTask(callback, name);
        }
    }

}
