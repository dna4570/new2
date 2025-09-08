<script setup lang="ts">
import { useRoute } from "vue-router"
import { projects } from "~/data/projects"

const route = useRoute()
const proj = projects.find(p => p.slug === route.params.slug)
if (!proj) {
  throw createError({ statusCode: 404, statusMessage: "Project Not Found" })
}
</script>

<template>
  <main class="max-w-4xl mx-auto p-6">
    <NuxtLink to="/" class="text-sm underline">← Back</NuxtLink>
    <h1 class="text-2xl font-bold mt-2 mb-3">{{ proj.title }}</h1>

    <div v-if="proj.thumbnail" class="mb-4">
      <img :src="proj.thumbnail" :alt="proj.title" class="w-full h-60 object-cover rounded-xl" />
    </div>

    <p class="text-gray-700 mb-4">{{ proj.summary }}</p>

    <div v-if="proj.subworks?.length" class="grid sm:grid-cols-2 gap-4 mb-6">
      <figure v-for="(s, i) in proj.subworks" :key="i" class="rounded-xl border p-3">
        <img v-if="s.img" :src="s.img" :alt="s.title" class="w-full h-40 object-cover rounded-lg mb-2" />
        <figcaption class="text-sm">{{ s.title }}</figcaption>
      </figure>
    </div>

    <div v-if="proj.links?.length" class="flex gap-3">
      <a v-for="l in proj.links" :key="l.url" :href="l.url" target="_blank" class="underline">{{ l.label }}</a>
    </div>
  </main>
</template>
