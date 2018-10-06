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

        console.log(evt.target);
    });
}
