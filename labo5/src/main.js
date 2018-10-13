import Vue from 'vue'
import App from './App.vue'
import Todo from './Todo.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')

new Vue({
    render: h => h(Header)
}).$mount('#header')

new Vue({
    render: h => h(Todo)
}).$mount('#todo')

new Vue({
    render: h => h(Footer)
}).$mount('#footer')
