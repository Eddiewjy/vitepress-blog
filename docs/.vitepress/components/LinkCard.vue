<template>
  <div
    @click="openLink"
    class="link-card my-3 p-4 transition-all duration-300 rounded-lg shadow-sm cursor-pointer hover:bg-amber-50 dark:shadow-amber-900/40 hover:scale-[0.99] shadow-amber-400/30 dark:bg-stone-800 dark:hover:bg-stone-800/80 bg-amber-50/50 group"
  >
    <header class="font-bold">{{ icon || "🐳" }} {{ desc }}</header>
    <footer
      class="mt-1 transition-all duration-300 text-stone-500 dark:text-stone-400 dark:group-hover:text-amber-400 line-clamp-1"
    >
      {{ link }}
    </footer>
  </div>
</template>

<script setup>
const { desc, link, icon } = defineProps(["desc", "link", "icon"]);
function openLink() {
  window.open(link, "_blank");
}
</script>
