<script setup lang="ts">
defineProps<{ cols: { title:string; links:string[] }[] }>()
</script>

<template>
  <footer class="bg-slate-900 text-slate-200 mt-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div class="font-black text-2xl">TOKYOMETRO</div>
      <p class="text-sm text-slate-400 mt-2">
        〒100-0000 東京都港区◯◯ 9-9-9<br/>平日 10:00〜19:00（休憩 13:00〜14:00）
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <details v-for="(c,i) in cols" :key="i" class="bg-slate-800/50 rounded-lg">
          <summary class="cursor-pointer px-4 py-3 font-semibold">{{ c.title }}</summary>
          <ul class="px-4 pb-3 text-sm text-slate-300">
            <li v-for="(l,j) in c.links" :key="j" class="py-0.5">{{ l }}</li>
          </ul>
        </details>
      </div>

      <div class="mt-8 text-xs text-slate-400 border-t border-white/10 pt-4">
        © {{ new Date().getFullYear() }} TOKYOMETRO — All rights reserved.
      </div>
    </div>

    <button @click="window.scrollTo({ top: 0, behavior:'smooth' })"
            class="fixed right-4 bottom-5 bg-slate-800 text-white rounded-full px-3 py-2 text-xs">
      上に戻る
    </button>
  </footer>
</template>
