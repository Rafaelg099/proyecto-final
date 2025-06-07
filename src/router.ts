import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Libros from './views/Libros.vue'
import Prestamos from './views/Prestamos.vue'
import Usuarios from './views/Usuarios.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/libros', component: Libros },
  { path: '/prestamos', component: Prestamos },
  { path: '/usuarios', component: Usuarios }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

