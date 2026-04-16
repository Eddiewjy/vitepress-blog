<template>
  <div @click="openLink"
    class="flex flex-col items-center w-full h-full p-6 transition-all duration-300 border cursor-pointer bg-stripe group hover:border-amber-600 dark:hover:border-amber-400 dark:border-stone-700 bg-white dark:bg-stone-800 dark:text-stone-300 rounded-xl">
    <!-- 头像 -->
    <div class="w-16 h-16 overflow-hidden rounded-full VP-shadow">
      <img :src="avatar" :alt="name" />
    </div>
    <!-- 简介 -->
    <div class="w-full text-center">
      <h1 class="text-lg font-bold tracking-wider dark:text-stone-200">
        {{ name }}
      </h1>
      <div>
        <Badge :color="color || 'amber'">{{ tag }}</Badge>
      </div>
      <p class="w-full mt-1 break-words line-clamp-2 dark:text-stone-400">
        {{ title }}
      </p>
      <p
        class="inline-block mt-2 text-sm text-amber-600 transition-all duration-300 border-b border-amber-600 dark:text-amber-400 dark:border-amber-400 sm:opacity-0 group-hover:opacity-100">
        🔗{{ shortLink }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Badge from "../components/Badge.vue"

const friendsInfo = defineProps(["avatar", "name", "title", "link", "tag", "color"]);

const shortLink = computed(() => {
  let baseLink = friendsInfo.link;
  const regex = /^(http|https):\/\/(.*)$/;
  return baseLink.replace(regex, "$2")
})

function openLink() {
  window.open(friendsInfo.link, "_blank");
}
</script>

<style scoped>
.VP-shadow {
  box-shadow: var(--vp-shadow-3);
}

.bg-stripe:hover {
  background-image: repeating-linear-gradient(45deg,
      hsl(35 30% 98%),
      hsl(35 30% 98%) 13px,
      hsl(35 25% 94%) 13px,
      hsl(35 25% 94%) 14px);
}

.dark .bg-stripe:hover {
  background-image: repeating-linear-gradient(45deg,
      hsl(30, 20%, 18%),
      hsl(30, 20%, 18%) 13px,
      hsl(30, 20%, 15%) 13px,
      hsl(30, 20%, 15%) 14px);
}
</style>
