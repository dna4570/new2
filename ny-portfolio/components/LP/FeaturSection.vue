<template>
  <section class="bg-white">
    <div class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div :class="reverse ? 'md:order-2' : ''">
        <p v-if="eyebrow" class="text-sm font-semibold text-slate-500 mb-2">{{ eyebrow }}</p>
        <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
        <p class="text-slate-600 mb-6">{{ text }}</p>
        <NuxtLink v-if="cta" :to="cta.href" class="inline-block px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
          {{ cta.label }}
        </NuxtLink>
      </div>
      <div :class="reverse ? 'md:order-1' : ''">
        <div class="rounded-2xl overflow-hidden shadow">
          <img :src="image" class="w-full h-72 object-cover" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  text: string
  image: string
  reverse?: boolean
  cta?: { label: string; href: string }
}>()
</script>
