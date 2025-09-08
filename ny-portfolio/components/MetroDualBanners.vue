<script setup lang="ts">
defineProps<{ items: { title:string; subtitle:string; img:string; text:string }[] }>()
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="grid md:grid-cols-2 gap-6">
      <article v-for="(b,i) in items" :key="i" class="rounded-2xl overflow-hidden border">
        <img :src="b.img" class="w-full h-52 object-cover" alt="" />
        <div class="p-5">
          <div class="text-center font-bold text-xl">{{ b.title }}</div>
          <div class="text-center text-slate-500 mb-2">{{ b.subtitle }}</div>
          <p class="text-sm text-slate-600">{{ b.text }}</p>
          <div class="mt-4 text-right">
            <NuxtLink to="/contact" class="text-sm underline">詳しくはこちら</NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
