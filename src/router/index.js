import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Home from '../views/HomeView.vue'
import Admin from '../views/AdminView.vue'
import Register from '../views/RegisterView.vue'
import products from '../views/ProductView.vue'
import singleProduct from '../views/singleProductView.vue'
import contact from '../views/contactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/all-products',
    name: 'products',
    component: products
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/singleProduct/:id',
    name: 'singleProduct',
    component: singleProduct
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
