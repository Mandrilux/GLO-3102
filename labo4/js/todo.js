import { TodoApiRequest } from './todoApiRequest.js';

let deleteAction = function() {
    console.log("toto");
}

export class Todo{
    constructor() {
        this.todoApiRequest = new TodoApiRequest();
        this.alias = "toto";
    }



    createTodo()
    {
        let name = document.getElementsByName("name")[0].value;
        if (name.length > 0)
        {
            let callback = function(data){
                let dataparse = JSON.parse(data);
                document.getElementById("todos").innerHTML +="<br> Tache : "+dataparse.name+"<a href='#' data-id='"+dataparse.id+"'> Delete </a>";
            };
            this.todoApiRequest.CreateTask(callback, name);
        }
    }

}
