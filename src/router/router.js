import Vue from 'vue'
import VueRouter from 'vue-router'
import EventView from '../components/EventView'
import CreateEvent from '../components/CreateEvent'
import EventList from '../components/EventList'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: EventList },
    { path: '/create-event', component: CreateEvent },
    { path: '/event-view', component: EventView }
]
  
const router = new VueRouter({
    routes
})

export default router