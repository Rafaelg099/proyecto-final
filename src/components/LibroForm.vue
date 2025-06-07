<template>
  <form @submit.prevent="guardarLibro" class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Agregar Libro</h2>

    <input
      v-model="libro.titulo"
      placeholder="Título"
      required
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    <input
      v-model="libro.autor"
      placeholder="Autor"
      required
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    <input
      v-model="libro.categoria"
      placeholder="Categoría"
      required
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
      Guardar
    </button>
  </form>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { agregarLibro } from '../services/libros';

const libro = ref({ titulo: '', autor: '', categoria: '' });

const guardarLibro = async () => {
  await agregarLibro(libro.value);
  alert('Libro guardado');
  libro.value = { titulo: '', autor: '', categoria: '' };
};
</script>
