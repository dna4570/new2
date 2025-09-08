<template>
  <section class="bg-white">
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="flex items-end justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold">{{ title }}</h2>
          <p class="text-slate-600">{{ subtitle }}</p>
        </div>
        <NuxtLink v-if="more" :to="more" class="text-sm underline">More from the blog →</NuxtLink>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="(p,i) in posts" :key="i" class="rounded-2xl border p-4 hover:shadow">
          <img v-if="p.image" :src="p.image" class="w-full h-36 object-cover rounded-xl mb-3" alt="" />
          <h3 class="font-semibold mb-1">{{ p.title }}</h3>
          <p class="text-sm text-slate-600">{{ p.excerpt }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  more?: string
  posts: { title: string; excerpt: string; image?: string }[]
}>()
</script>
