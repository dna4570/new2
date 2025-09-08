<script setup lang="ts">
const props = defineProps<{ images: string[] }>()
const idx = ref(0)
function next() { if (idx.value + 1 < props.images.length) idx.value += 1; else idx.value = 0 }
function prev() { if (idx.value - 1 >= 0) idx.value -= 1; else idx.value = props.images.length - 1 }
</script>

<template>
  <section class="relative">
    <img :src="images[idx]" class="w-full h-[320px] sm:h-[420px] object-cover" alt="" />
    <button @click="prev" class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-9 h-9">‹</button>
    <button @click="next" class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-9 h-9">›</button>
  </section>
</template>
