<script setup lang="ts">
defineProps<{ items: { title: string; img: string }[] }>()
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="(c,i) in items" :key="i" class="rounded-2xl overflow-hidden border">
        <img :src="c.img" class="w-full h-40 object-cover" alt="" />
        <div class="p-4 font-semibold">{{ c.title }}</div>
      </article>
    </div>
    <div class="mt-6 text-sm text-slate-600 leading-relaxed">
      デザイン〜コーディングまで対応。実装はHTML/CSS/JavaScript中心、Photoshop等の制作も行います。
      スケジュールは対話ベースで柔軟に調整可能です。
    </div>
  </section>
</template>
