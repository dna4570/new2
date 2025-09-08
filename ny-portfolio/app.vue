<script setup>
import "@/assets/css/tailwind.css"  // グローバルCSS
onMounted(() => { document.documentElement.classList.add('dark') })
</script>

<template>
  <NuxtPage />
</template>
