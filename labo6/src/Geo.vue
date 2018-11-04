<template>
    <section id="wrapp-geolocation">
        <input v-model="city" id="city" type="text" name="city" placeholder="Ville...">
        <input id="submitButton" type="submit" value="Valider" v-on:click="save(city)">
    </section>
</template>


<script>
    export default {
        methods: {
            save: function(city){
                console.log(city);
            }
        },
        data() {
            return {
                city: '',
            };
        }
    }

    //import { TodoList } from './components/todo.js';





</script>


<style>

    #wrapp-geolocation
    {
        margin-top: 70px;
    }


</style>




