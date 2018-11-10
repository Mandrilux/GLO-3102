<template>
    <section id="wrapp-geolocation">
        <input v-model="city" id="city" type="text" name="city"  placeholder="Saisir une Ville...">
        <input id="submitButton" type="submit" value="Valider" v-on:click="save(city)">


    </section>

</template>


<script>
    import { ApiRequest } from './API/ApiRequest';

    export default {
        methods: {
            save: function(city){
                this.Api.city = city;
                this.Api.getByCity();

                let callback = function(data){
                    let dataparse = JSON.parse(data);
                    console.log(dataparse);
                }
                this.Api.getByCity(callback);




            },
           /* geolocation() {
                navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
            },
            buildUrl(position) {
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
                this.lon = position.coords.longitude;
                this.lat = position.coords.latitude;
                print ("getvalue")
                print(this.lat)

            },
            geoError(error) {
                alert(error);
            }*/
        },
        data() {
            return {
                city: '',
                lat: '',
                lon: '',
                Api : new ApiRequest()
            };
        },
        /*beforeMount() {
            this.geolocation();
            console.log("premount" + this.lon)

        },
        mounted(){
            console.log("ok" + this.lat)
            console.log(this.lon)
            this.Api.getCity(this.lat, this.lon)
        }*/
    }




</script>


<style>

    #wrapp-geolocation
    {
        margin-top: 70px;
    }


</style>




