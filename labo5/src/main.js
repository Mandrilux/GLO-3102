import Vue from 'vue'
import App from './App.vue'
import Todo from './Todo.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')

new Vue({
    render: h => h(Todo)
}).$mount('#todo')
