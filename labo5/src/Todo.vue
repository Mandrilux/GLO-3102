<template>
    <section>
        <div id="container-alert"></div>
        <h1>Ajouter une nouvelle tâche</h1>
        <div class="wrapp-login">
            <label for="name" class="input-label">Tittle de la nouvelle tâche (auto-login) </label><br>
            <input type="text" name="name" id="name" class="input-new-task" placeholder="titre de la tâche"><br>
            <input type="submit" id="loginButton" value="Ajouter" class="button blue">
        </div>
        <div class="todos" id="todos"></div>
    </section>
</template>


<script>
    export default {
        name: 'Todo'
    }

    import { TodoList } from './todo.js';
    import { Toast } from './components/Toast.js';

    window.onload = function (e)
    {
        let todo = new TodoList();
        let ToastId = 0;
        document.getElementById("loginButton").onclick = function(){
            let flag = todo.createTodo();
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




</script>


<style>


    section {
        margin-top: 90px;
        width: 80%;
        margin-left: 10%;
    }
    @media screen and (max-width : 740px) {
        section {
            margin-left: 5%;
        }
    }

    .div-logo {
        width: 80%;
        text-align: left;
        margin-left: 10%;
    }

    .input-new-task, .task-input {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        border: 1px solid gray;
        height: 1.6em;
        padding: 0 10px;
        width: 80%;
    }

    .button {
        padding: 10px 20px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        cursor: pointer;
        margin: 10px 0;
    }

    .button.blue {
        background: green;
        color: white;
    }
    .button.blue:hover {
        background: white;
        color: green;
        border: 2px solid green;
    }

    .task {
        margin: 5px 0;
        padding: 10px;
        border: 1px solid lightgray;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
    }
    .task-input {
        flex-grow: 2;
        margin-right: 10px;
    }
    .delete, .update {
        flex-grow: 0;
        padding: 10px 20px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        cursor: pointer;
    }

    .update{
        margin-right: 10px;
        background: orange;
        color: white;
    }
    .update:hover{
        background: white;
        color: orange;
        border: 2px solid orange;
    }

    .delete{
        background: red;
        color: white;
    }
    .delete:hover{
        background: white;
        color: red;
        border: 2px solid red;
    }

    @media screen and (max-width : 740px){
        .task {
            margin: 0;
            padding: 0;
            border: none;
        }
        .task-input, .update {
            margin: 0;
        }
    }


    .success
    {
        background-image: linear-gradient(to bottom right, #52FF01, #639A4A);
    }

    .error
    {
        background-image: linear-gradient(to bottom right, red, red);
    }
    #container-alert {
        position: fixed;
        top: 5px;
        right: 30px;
        width: 30%;
    }
    .toast
    {
        border:1px solid gray;
        padding: 10px;
        width: 100%;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        box-shadow: 2px 2px 5px lightgray;
    }
    .toast > .titre {
        color: white;
        font-size: 1.5em;
        font-weight: bold;
    }
    .toast > .message {
        color: white;
    }

</style>
