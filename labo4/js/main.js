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
        let name = evt.target.getAttribute("class");
        if (id !== null && (name === 'delete' || name === 'update') ) {
            if (name === 'delete') {

                let el = document.getElementById(id);
                el.remove();
                let callback = function(data){
                };
                todo.todoApiRequest.DeleteTask(callback, id);
            }
            if (name === 'update'){
                let el = document.getElementById(id);
                let nametask = el.getElementsByTagName("input")[0].value;
                let callback = function(data){
                };
                todo.todoApiRequest.UpdateTask(callback, id, nametask);
                console.log('on update');
            }
        }
        //console.log(typeof evt.target);
    });
}
