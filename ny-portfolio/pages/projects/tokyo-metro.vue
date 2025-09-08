<script setup lang="ts">
import { heroImages, skillCards, banners, news, workflow, tableItems, footerLinks } from "~/data/metroLp"
</script>

<template>
  <div>
    <MetroHeader />

    <MetroHero :images="heroImages" />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <MetroSectionTitle>Responsive/Web</MetroSectionTitle>
    </div>

    <MetroCardGrid :items="skillCards" />

    <MetroSectionTitle>制作メニュー</MetroSectionTitle>
    <MetroDualBanners :items="banners" />

    <MetroNewsList :items="news" />

    <MetroWorkflow :steps="workflow" />

    <MetroTable :rows="tableItems" />

    <MetroFooter :cols="footerLinks" />
  </div>
</template>
