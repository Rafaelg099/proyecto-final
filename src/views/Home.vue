<template>
  <section class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center px-6 py-16">
    <!-- Título -->
    <h1 class="text-5xl font-bold text-blue-700 dark:text-white mb-4">
      Bienvenido a la Biblioteca Virtual
    </h1>

    <!-- Subtítulo -->
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
      Explora, presta y gestiona libros desde un solo lugar. <br />
      Control total sobre préstamos, usuarios y notificaciones.
    </p>

    <!-- Botones -->
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
      <router-link
        to="/libros"
        class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
      >
        Ver Catálogo
      </router-link>
      <router-link
        to="/usuarios"
        class="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold border border-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 transition"
      >
        Área de Usuario
      </router-link>
    </div>

    <!-- Tarjetas de características -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto mb-12">
      <FeatureCard icon="BookOpen" title="Catálogo Moderno" desc="Consulta libros por categoría, autor o nombre. Diseño claro y rápido." />
      <FeatureCard icon="Clock" title="Gestión de Préstamos" desc="Lleva control de préstamos y devoluciones en tiempo real." />
      <FeatureCard icon="Bell" title="Alertas Inteligentes" desc="Recibe notificaciones de devoluciones y bloqueos automáticos." />
    </div>

    <!-- Footer -->
    <footer class="text-sm text-gray-500 dark:text-gray-400 mt-12">
      © {{ new Date().getFullYear() }} Biblioteca Virtual — Desarrollado con ❤️ en Vue + Tailwind
    </footer>
  </section>
</template>
