<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto space-y-4">
    <h2 class="text-xl font-bold text-gray-800 dark:text-white">Notificaciones</h2>

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
      Ver notificaciones
    </button>

    <ul class="space-y-3 mt-4 text-gray-800 dark:text-white">
      <li
        v-for="(item, index) in notificaciones"
        :key="index"
        class="p-3 border rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
      >
        <div><strong>Mensaje:</strong> {{ item.mensaje }}</div>
        <div><strong>Fecha:</strong> {{ item.fecha }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { obtenerNotificaciones } from '../services/usuarios';

interface Notificacion {
  mensaje: string;
  fecha: string;
}

const usuarioId = ref(0);
const notificaciones = ref<Notificacion[]>([]);

const consultar = async () => {
  const data = await obtenerNotificaciones(usuarioId.value);
  notificaciones.value = data;
};
</script>
