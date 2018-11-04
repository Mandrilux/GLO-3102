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

new Vue({
    render: h => h(Footer)
}).$mount('#footer')
