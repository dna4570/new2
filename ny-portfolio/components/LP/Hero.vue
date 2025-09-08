<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
    <img v-if="bg" :src="bg" alt="" class="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none" />
    <div class="relative max-w-6xl mx-auto px-6 py-24">
      <div class="flex items-center gap-3 text-slate-300 text-sm mb-6" v-if="eyebrow">
        <span class="inline-block px-2 py-0.5 rounded bg-white/10">{{ eyebrow }}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
        {{ title }}
      </h1>
      <p class="mt-5 text-lg text-slate-200 max-w-2xl">
        {{ subtitle }}
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <NuxtLink v-for="(cta,i) in ctas" :key="i" :to="cta.href" class="px-5 py-3 rounded-xl font-semibold"
                  :class="i===0 ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-white/10 hover:bg-white/20'">
          {{ cta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  eyebrow?: string
  bg?: string
  ctas?: { label: string; href: string }[]
}>()
</script>
