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
                document.getElementById("todos").innerHTML +="<div class='task' id='"+dataparse.id+"'>" +
                    "<input class='task-input' type='text' name='task' value='"+dataparse.name+"'>" +
                    "<button type='button' class='update' data-id='"+dataparse.id+"'>Modifier</button>" +
                    "<button class='delete' data-id='"+dataparse.id+"'> Delete </button>" +
                    "</div>";
            };
            this.todoApiRequest.CreateTask(callback, name)

        }
    }

    updateTodo() {
        let callback = function(data){
            let dataparse = JSON.parse(data);
            console.log(dataparse);
        };
        this.todoApiRequest.GetTask(callback);
    }

}
