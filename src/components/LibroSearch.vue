<template>
  <form @submit.prevent="buscar" class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto mb-6">
    <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Buscar Libros</h2>

    <input
      v-model="filtros.titulo"
      placeholder="Título"
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    <input
      v-model="filtros.autor"
      placeholder="Autor"
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    <input
      v-model="filtros.categoria"
      placeholder="Categoría"
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
      Buscar
    </button>
  </form>

  <ul class="space-y-2 max-w-md mx-auto">
    <li v-for="libro in resultados" :key="libro.id" class="p-3 border rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
      {{ libro.titulo }} - {{ libro.autor }} ({{ libro.categoria }})
    </li>
  </ul>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { buscarLibros } from '../services/libros';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
}

const filtros = ref({
  titulo: '',
  autor: '',
  categoria: '',
});

const resultados = ref<Libro[]>([]);

const buscar = async () => {
  const { data } = await buscarLibros(filtros.value);
  resultados.value = data;
};
</script>

