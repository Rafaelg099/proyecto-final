<template>
  <form @submit.prevent="devolver" class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Registrar Devolución</h2>

    <input
      v-model="id"
      type="number"
      placeholder="ID del préstamo"
      required
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />

    <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded">
      Registrar devolución
    </button>
  </form>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { devolverLibro } from '../services/prestamos';

const id = ref(0);

const devolver = async () => {
  await devolverLibro(id.value);
  alert('Libro devuelto');
};
</script>
