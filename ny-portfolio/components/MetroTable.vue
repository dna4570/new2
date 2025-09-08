<script setup lang="ts">
defineProps<{ rows: { image:string; name:string; price:string; stock:number; code:string }[] }>()
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6">
    <MetroSectionTitle>採用事例（≒ My SKILL）</MetroSectionTitle>
    <div class="overflow-x-auto rounded-2xl border">
      <table class="min-w-[640px] w-full text-sm">
        <thead class="bg-slate-100">
          <tr>
            <th class="px-3 py-2 text-left">Image</th>
            <th class="px-3 py-2 text-left">Product name</th>
            <th class="px-3 py-2 text-left">Price</th>
            <th class="px-3 py-2 text-left">Inventory</th>
            <th class="px-3 py-2 text-left">Product code</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r,i) in rows" :key="i" class="border-t">
            <td class="px-3 py-2">{{ r.image }}</td>
            <td class="px-3 py-2">{{ r.name }}</td>
            <td class="px-3 py-2">{{ r.price }}</td>
            <td class="px-3 py-2">{{ r.stock }}</td>
            <td class="px-3 py-2">{{ r.code }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
