<template>
    <section id="wrapp-geolocation">
        <input v-model="city" id="city" type="text" name="city" placeholder="Saisir une Ville...">
        <input id="submitButton" type="submit" value="Valider" v-on:click="save(city)">
    </section>
</template>


<script>
    export default {
        methods: {
            save: function(city){
                console.log(city);
                this.geolocation()
            },
            geolocation() {
                navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
            },
            buildUrl(position) {
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
            },
            geoError(error) {
                alert(error);
            }
        },
        data() {
            return {
                city: '',
                lat: '',
                lon: ''
            };
        },
        beforeMount() {
            this.geolocation();
        },
    }

    //import { TodoList } from './components/todo.js';





</script>


<style>

    #wrapp-geolocation
    {
        margin-top: 70px;
    }


</style>




