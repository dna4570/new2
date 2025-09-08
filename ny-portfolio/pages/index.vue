<script setup lang="ts">
// ヒーロー
const hero = {
  eyebrow: "For Recruiters / Clients",
  title: "Data driven by choice.\nRelentlessly result oriented.",
  subtitle: "Nuxt 3 + Tailwind で構築した実案件志向のポートフォリオ。SPA/LP/ダッシュボードまで対応。",
  bg: "/images/hero.jpg",
  ctas: [
    { label: "View Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ]
}

// ロゴ
const logos = [
  "/images/logo1.svg","/images/logo2.svg","/images/logo3.svg",
  "/images/logo4.svg","/images/logo5.svg","/images/logo6.svg"
]

// フィーチャー（左右交互）
const f1 = {
  eyebrow: "Case Study",
  title: "Designing The Enterprise Platform",
  text: "業務要件を整理しつつ、UIとデータ構造を並行で設計。アクセシビリティと運用性を優先。",
  image: "/images/feature-1.jpg",
  cta: { label: "Read Case Study", href: "/projects/tokyo-metro" }
}
const f2 = {
  eyebrow: "Analytics",
  title: "Engineering ROI Reporting at Scale",
  text: "ダッシュボード／API／集計バッチを分離し、再利用性を高めた設計。",
  image: "/images/feature-2.jpg",
  reverse: true,
  cta: { label: "View Project", href: "/projects/lofi-music-spa" }
}

// プロセス
const steps = [
  { title: "Ignite", text: "要件の言語化・ラフプロト。" },
  { title: "MVP", text: "小さく作って素早く計測。" },
  { title: "Iterate", text: "学びを反映して改良。" },
  { title: "Support", text: "運用・改善・監視。" },
]

// ブログ（ダミー）
const postsA = [
  { title: "What are Data Products?", excerpt: "データプロダクトの定義と成功条件。", image: "/images/blog-a1.jpg" },
  { title: "5 Challenges in AgriTech", excerpt: "現場導入でハマりがちな論点。", image: "/images/blog-a2.jpg" },
  { title: "Find Opportunities", excerpt: "業務フローのどこに価値が眠る？", image: "/images/blog-a3.jpg" },
]
const postsB = [
  { title: "Container Image Options", excerpt: "開発マシンでの最適化。", image: "/images/blog-b1.jpg" },
  { title: "Route53 Private DNS", excerpt: "開発環境の名前解決。", image: "/images/blog-b2.jpg" },
  { title: "Scraping with Scrapy", excerpt: "収集から前処理まで。", image: "/images/blog-b3.jpg" },
]
const postsC = [
  { title: "Visual Data with Vue", excerpt: "チャートとUXの橋渡し。", image: "/images/blog-c1.jpg" },
  { title: "Bindings for Deck.gl", excerpt: "大規模描画の実践。", image: "/images/blog-c2.jpg" },
  { title: "What is Django Channels?", excerpt: "双方向通信の基本。", image: "/images/blog-c3.jpg" },
]

// フッター
const footerCols = [
  { title: "Work", links: [{label:"Projects", href:"/projects"}, {label:"Case Studies", href:"/projects/tokyo-metro"}] },
  { title: "Company", links: [{label:"About", href:"/about"}, {label:"Contact", href:"/contact"}] },
  { title: "Tech", links: [{label:"Nuxt 3", href:"/stack"}, {label:"Tailwind CSS", href:"/stack"}] },
]
</script>

<template>
  <div>
    <LPHero v-bind="hero" />

    <LogoStrip caption="Product partners to" :logos="logos" />

    <FeatureSection v-bind="f1" />
    <FeatureSection v-bind="f2" />

    <ProcessGrid title="How do I deliver?" subtitle="小さく作って、早く学ぶ。継続的に改善。" :steps="steps" />

    <BlogGrid title="Insights: Product & Strategy" subtitle="開発の土台になる考え方" more="/blog" :posts="postsA" />
    <BlogGrid title="DevOps" subtitle="開発を支える基盤" more="/blog" :posts="postsB" />
    <BlogGrid title="Software Development" subtitle="実装のTIPS" more="/blog" :posts="postsC" />

    <SiteFooter :cols="footerCols" />
  </div>
</template>
