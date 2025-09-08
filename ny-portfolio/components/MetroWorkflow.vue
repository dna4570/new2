<script setup lang="ts">
defineProps<{ steps: { label:string; img:string }[] }>()
</script>

<template>
  <section class="bg-orange-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div class="font-bold text-xl mb-1">One day Work Flow（業務見本）</div>
      <p class="text-sm text-slate-600 mb-6">Product manual / How to use</p>
      <div class="flex gap-6 overflow-x-auto pb-4">
        <div v-for="(s,i) in steps" :key="i" class="min-w-[80px] text-center">
          <img :src="s.img" class="w-16 h-16 object-contain mx-auto" alt="" />
          <div class="text-xs mt-1">{{ s.label }}</div>
        </div>
      </div>
      <div class="mt-4">
        <NuxtLink to="/contact" class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full">
          お問合せはこちら
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
