import Vue from 'vue'
import Geo from './Geo.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'

new Vue({
    render: h => h(Header)
}).$mount('#header')


new Vue({
    render: h => h(Geo)
}).$mount('#geoloc')

/*new Vue({
    el: '#geoloc',
    data: {
        lat: '',
        lon: '',
        city: ''
    },
    render: h => h(Geo),
    methods: {
        geolocation() {
            navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
        },
        buildUrl(position) {
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
            console.log(this.lat);
            console.log(this.lon);
        },
        geoError(error) {
            alert(error);
        },
        edit () {
        console.log("ok")
        }
    },
    beforeMount() {
        this.geolocation();
    },

})*/


new Vue({
    render: h => h(Footer)
}).$mount('#footer')
