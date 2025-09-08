<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div class="text-xl font-extrabold text-white mb-2">lofi.</div>
        <p class="text-sm text-slate-400">Data-driven portfolio. Built with Nuxt 3 + Tailwind.</p>
      </div>
      <div v-for="(col, i) in cols" :key="i">
        <div class="font-semibold text-white mb-2">{{ col.title }}</div>
        <ul class="space-y-1 text-sm">
          <li v-for="(l,j) in col.links" :key="j"><NuxtLink :to="l.href" class="hover:underline">{{ l.label }}</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 py-4 text-center text-xs text-slate-400">
      © {{ new Date().getFullYear() }} N.Y. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ cols: { title: string; links: { label: string; href: string }[] }[] }>()
</script>
