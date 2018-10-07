import { Todo } from './Todo.js';
import { Toast } from './toast.js';


let todo = new Todo();

window.onload = function (e)
{
    let todo = new Todo();
    let ToastId = 0;
    document.getElementById("loginButton").onclick = function(){
        let flag = todo.createTodo();
        console.log(flag);
        console.log(todo.todoApiRequest.token);

        if (flag == 1){
            let toast = new Toast("Ajouter", "Votre tâche à bien été ajoutée", "success");
            toast.showInContainer(ToastId);
            ToastId++;
        }
        else{
            let toast = new Toast("Ajouter", "Le nom est incorrect", "error");
            toast.showInContainer(ToastId);
            ToastId++;
        }

        //todo.updateTodo();
    }
   var list = document.getElementById('todos');

    list.addEventListener('click', function(evt){

        let id = evt.target.getAttribute("data-id");
        let name = evt.target.getAttribute("class");
        if (id !== null && (name === 'delete' || name === 'update') ) {
            if (name === 'delete') {

                let el = document.getElementById(id);
                el.remove();
                todo.todoApiRequest.DeleteTask(id);
                let toast = new Toast("Supprimer", "Votre tâche à bien été supprimée", "success");
                toast.showInContainer(ToastId);
                ToastId++;
            }
            if (name === 'update'){
                let el = document.getElementById(id);
                let nametask = el.getElementsByTagName("input")[0].value;
                todo.todoApiRequest.UpdateTask(id, nametask);
                el.getElementsByTagName("input")[0].setAttribute('value',nametask);
                let toast = new Toast("Modifier", "Votre tâche à bien été mise à jour", "success");
                toast.showInContainer(ToastId);
                ToastId++;
            }
        }
    });
}
