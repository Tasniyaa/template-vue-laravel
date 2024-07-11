<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-lg w-full p-6 bg-white rounded-lg shadow-xl">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h2>
      <p class="text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
      <router-link to="/" class="text-blue-500 hover:underline">Go back to homepage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
/* Add any additional styling specific to this component */
</style>