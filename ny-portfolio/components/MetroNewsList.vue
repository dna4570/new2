<script setup lang="ts">
defineProps<{ items: { date:string; title:string; body:string }[] }>()
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6">
    <MetroSectionTitle>お知らせ・ニュース</MetroSectionTitle>
    <div class="divide-y">
      <article v-for="(n,i) in items" :key="i" class="py-4">
        <div class="text-sm text-slate-500">{{ n.date }}</div>
        <h3 class="font-semibold">{{ n.title }}</h3>
        <p class="text-sm text-slate-700">{{ n.body }}</p>
      </article>
    </div>
  </section>
</template>
