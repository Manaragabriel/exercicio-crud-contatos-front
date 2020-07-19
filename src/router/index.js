import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Contact from '../views/Contact/Contact.vue'
import EditContact from '../views/Contact/EditContact.vue'
import CreateContact from '../views/Contact/CreateContact.vue'
import PhoneList from '../views/Phone/PhoneList.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contact,
  },
  {
    path: '/contacts/create',
    component: CreateContact
  },

  {
    path: '/contacts/edit/:id',
    component: EditContact
  },
  {
    path: '/phones/:contact_id',
    component: PhoneList
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
