import Vue from 'vue'
import VueRouter from 'vue-router'
import Body from '../components/body.vue'
import AboutUs from '../components/aboutUs.vue'
import ContactUs from '../components/contactUs.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component : Body
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUs
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: ContactUs
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
