<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
    <component :is="Icon" class="w-8 h-8 text-blue-600 mb-4" />
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-300">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
import { BookOpen, Clock, Bell } from 'lucide-vue-next'

const icons = { BookOpen, Clock, Bell }

const props = defineProps<{
  icon: keyof typeof icons
  title: string
  desc: string
}>()

const Icon = icons[props.icon]
</script>


