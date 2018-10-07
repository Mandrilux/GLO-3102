import { TodoApiRequest } from './todoApiRequest.js';

let deleteAction = function() {
    console.log("toto");
}

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
                document.getElementById("todos").innerHTML +="<div id='"+dataparse.id+"'> Tache : <input type='text' name='task' value='"+dataparse.name+"'><button type='button' class='update' data-id='"+dataparse.id+"'>Modifier</button><button class='delete' data-id='"+dataparse.id+"'> Delete </button></div>";
            };
            this.todoApiRequest.CreateTask(callback, name);
        }
    }

}
