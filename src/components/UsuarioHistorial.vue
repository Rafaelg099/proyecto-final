<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto space-y-4">
    <h2 class="text-xl font-bold text-gray-800 dark:text-white">Historial de Usuario</h2>

    <input
      v-model="usuarioId"
      type="number"
      placeholder="ID del usuario"
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />

    <button
      @click="consultar"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded w-full"
    >
      Ver historial
    </button>

    <ul class="space-y-3 mt-4 text-gray-800 dark:text-white">
      <li
        v-for="item in historial"
        :key="item.libro + item.fechaPrestamo"
        class="p-3 border rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
      >
        <div><strong>Libro:</strong> {{ item.libro }}</div>
        <div><strong>Prestado:</strong> {{ item.fechaPrestamo }}</div>
        <div><strong>Devolución:</strong> {{ item.fechaDevolucion }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { obtenerHistorial } from '../services/usuarios';

interface HistorialItem {
  libro: string;
  fechaPrestamo: string;
  fechaDevolucion: string;
}

const usuarioId = ref(0);
const historial = ref<HistorialItem[]>([]);

const consultar = async () => {
  const data = await obtenerHistorial(usuarioId.value);
  historial.value = data;
};
</script>
