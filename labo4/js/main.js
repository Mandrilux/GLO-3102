import { Todo } from './Todo.js';


let todo = new Todo();

window.onload = function (e)
{
    let todo = new Todo();
    document.getElementById("loginButton").onclick = function(){
        todo.createTodo();
    }
   var list = document.getElementById('todos');

    list.addEventListener('click', function(evt){

        let id = evt.target.getAttribute("data-id");
        if (id !== null) {
            console.log("ID = "+ id);
        }
        //console.log(typeof evt.target);
    });
}
