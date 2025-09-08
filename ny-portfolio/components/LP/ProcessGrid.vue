<template>
  <section class="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="text-3xl font-bold mb-2">{{ title }}</h2>
      <p class="text-white/80 mb-10">{{ subtitle }}</p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(s,i) in steps" :key="i" class="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <div class="text-sm font-semibold opacity-80 mb-1">Step {{ i+1 }}</div>
          <div class="text-lg font-bold mb-1">{{ s.title }}</div>
          <p class="text-white/80 text-sm">{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle?: string; steps: { title: string; text: string }[] }>()
</script>
