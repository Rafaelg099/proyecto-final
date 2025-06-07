<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto space-y-4">
    <h2 class="text-xl font-bold text-gray-800 dark:text-white">Bloqueo de Usuario</h2>

    <input
      v-model="usuarioId"
      type="number"
      placeholder="ID del usuario"
      class="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />

    <button
      @click="bloquearUsuario"
      class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded w-full"
    >
      Bloquear Usuario
    </button>

    <p v-if="mensaje" class="mt-2 text-green-600 dark:text-green-400">
      {{ mensaje }}
    </p>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { bloquearUsuario as bloquearUsuarioServicio } from '../services/usuarios'

const usuarioId = ref<number | null>(null)
const mensaje = ref('')

const bloquearUsuario = async () => {
  if (usuarioId.value !== null) {
    await bloquearUsuarioServicio(usuarioId.value)
    mensaje.value = `Usuario ${usuarioId.value} bloqueado correctamente.`
    usuarioId.value = null
  }
}
</script>
