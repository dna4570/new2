<template>
  <section class="bg-white">
    <div class="max-w-6xl mx-auto px-6 py-10">
      <p class="text-center text-sm text-slate-500 mb-6">{{ caption }}</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
        <img v-for="(l,i) in logos" :key="i" :src="l" class="h-8 object-contain mx-auto opacity-70" alt="partner" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ caption?: string; logos: string[] }>()
</script>
