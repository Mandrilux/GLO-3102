import { Todo } from './Todo.js';
import { Toast } from './toast.js';


let todo = new Todo();

window.onload = function (e)
{
    let todo = new Todo();
    let ToastId = 0;
    document.getElementById("loginButton").onclick = function(){
        todo.createTodo();
        let toast = new Toast("Ajouter", "Votre tâche à bien été ajoutée", "success");
        toast.showInContainer(ToastId);
        ToastId++;
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
                let toast = new Toast("Supprimer", "Votre tâche à bien été supprimée", "success");
                toast.showInContainer(ToastId);
                ToastId++;
            }
            if (name === 'update'){
                let el = document.getElementById(id);
                let nametask = el.getElementsByTagName("input")[0].value;
                let callback = function(data){
                };
                todo.todoApiRequest.UpdateTask(callback, id, nametask);
                let toast = new Toast("Modifier", "Votre tâche à bien été mise à jour", "success");
                toast.showInContainer(ToastId);
                ToastId++;
            }
        }
    });
}
