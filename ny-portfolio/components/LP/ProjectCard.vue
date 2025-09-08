<template>
  <NuxtLink :to="`/projects/${proj.slug}`" class="block rounded-2xl shadow p-4 hover:shadow-lg transition">
    <div v-if="!proj.thumbnail" class="w-full h-40 rounded-xl mb-3 bg-gray-200 flex items-center justify-center">
      <span class="text-xs text-gray-500">No image</span>
    </div>
    <img v-else :src="proj.thumbnail" :alt="proj.title" class="w-full h-40 object-cover rounded-xl mb-3" />
    <h3 class="text-lg font-semibold mb-1">{{ proj.title }}</h3>
    <p class="text-sm text-gray-600 mb-2">{{ proj.summary }}</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="t in proj.tags" :key="t" class="text-xs border rounded px-2 py-0.5">{{ t }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from "~/data/projects"
defineProps<{ proj: Project }>()
</script>
