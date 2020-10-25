import Vue from 'vue'
import Router from 'vue-router'
import CreateEvent from '@/components/CreateEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateEvent',
      component: CreateEvent
    }
  ]
})
