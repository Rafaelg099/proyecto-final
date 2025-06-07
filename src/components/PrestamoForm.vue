<template>
  <form @submit.prevent="registrar" class="space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Registrar Préstamo</h2>

    <input
      v-model="prestamo.libroId"
      type="number"
      placeholder="ID del libro"
      required
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    <input
      v-model="prestamo.usuarioId"
      type="number"
      placeholder="ID del usuario"
      required
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    <input
      v-model="prestamo.fechaPrestamo"
      type="date"
      required
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
    

    <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded">
      Registrar
    </button>
  </form>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { crearPrestamo } from '../services/prestamos';

const prestamo = ref({
  libroId: 0,
  usuarioId: 0,
  fechaPrestamo: '',
  fechaLimite: ''
});

const registrar = async () => {
  await crearPrestamo(prestamo.value);
  alert('Préstamo registrado');
};
</script>
