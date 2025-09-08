<template>
  <header class="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-slate-900 text-white grid place-items-center font-black">T</div>
        <span class="font-extrabold tracking-wide">TOKYOMETRO</span>
      </div>
      <nav class="hidden sm:flex items-center gap-6 text-sm">
        <NuxtLink to="/projects" class="hover:underline">Projects</NuxtLink>
        <a href="https://youtube.com" target="_blank" class="hover:underline">Youtube</a>
        <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
      </nav>
      <button class="sm:hidden p-2 rounded hover:bg-slate-100" aria-label="Menu">≡</button>
    </div>
  </header>
</template>
