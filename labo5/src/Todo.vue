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
</script>
