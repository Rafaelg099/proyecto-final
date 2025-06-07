import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './style.css'

createApp(App).use(router).mount('#app')

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <header class="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Sistema de Biblioteca</h1>
      <nav class="space-x-4">
        <RouterLink class="hover:underline" to="/home">Inicio</RouterLink>
        <RouterLink class="hover:underline" to="/libros">Libros</RouterLink>
        <RouterLink class="hover:underline" to="/prestamos">Préstamos</RouterLink>
        <RouterLink class="hover:underline" to="/usuarios">Usuarios</RouterLink>
      </nav>
    </header>

    <main class="p-6">
      <RouterView />
    </main>

    <footer class="text-center text-sm py-4 border-t dark:border-gray-700">
      © {{ new Date().getFullYear() }} Biblioteca UMG - Proyecto Final
    </footer>
  </div>
</template>

<script setup lang="ts">
// No necesitas nada aquí por ahora
</script>

<style scoped>
/* Puedes añadir estilos adicionales si lo deseas */
</style>
