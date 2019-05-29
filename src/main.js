import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import routes from '@/routes'
import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(EventBus)

const router = new VueRouter({ routes, mode: 'history' }) // con mode:'history', quita el hash o # de las url al navegar

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
