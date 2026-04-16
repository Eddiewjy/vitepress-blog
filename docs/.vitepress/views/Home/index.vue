<template>
  <div class="flex items-center justify-center w-screen h-screen bg-[#FAF9F6] dark:bg-[#1C1917]">
    <div class="flex flex-col items-center px-6 -mt-20 max-w-xl animate-scale-in-center">
      <!-- 波浪手 -->
      <span class="text-5xl shake-hand">👋</span>

      <!-- 主标题 -->
      <h1 class="mt-8 text-4xl font-bold tracking-tight text-center sm:text-5xl text-stone-800 dark:text-stone-100">
        Hi, I am
        <span class="text-transparent bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text">Eddie Wu</span>.
      </h1>

      <!-- 副标题 -->
      <p class="mt-4 text-lg tracking-wide text-center text-stone-400 dark:text-stone-500">
        Geek · Front-End Developer · Lifelong Learner
      </p>

      <!-- 分隔线 -->
      <div class="w-10 h-px my-8 bg-stone-300 dark:bg-stone-600"></div>

      <!-- 引用 -->
      <p class="text-sm italic leading-relaxed text-center text-stone-400 dark:text-stone-500">
        "Just something I can turn to, somebody I can kiss"<br />
        "I want something just like this"
      </p>

      <!-- 按钮组 -->
      <div class="flex gap-4 mt-10">
        <button @click="router.go('/AboutMe/')"
          class="px-6 py-2.5 text-sm font-medium transition-all duration-200 border rounded-lg text-amber-700 border-amber-600 hover:bg-amber-600 hover:text-white dark:text-amber-400 dark:border-amber-500 dark:hover:bg-amber-500 dark:hover:text-white active:scale-95">
          Welcome
        </button>
        <button @click="gotoGithub"
          class="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition-all duration-200 border rounded-lg text-stone-600 border-stone-300 hover:bg-stone-800 hover:text-white hover:border-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:bg-stone-200 dark:hover:text-stone-800 active:scale-95">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Github
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import { useRouter } from "vitepress";

const returnToTopRef = ref<HTMLElement | null>(null);
const router = useRouter();
const gotoGithub = () => window.open("https://github.com/Eddiewjy");

onMounted(() => {
  returnToTopRef.value = document.querySelector(".VPLocalNav.empty.fixed");
  if (returnToTopRef.value) returnToTopRef.value.style.zIndex = "-1000";
});

onBeforeUnmount(() => {
  if (returnToTopRef.value) returnToTopRef.value.style.zIndex = "1000";
});
</script>

<style scoped>
.shake-hand {
  display: inline-block;
  animation: shake 6s ease-in-out both infinite;
}
@keyframes shake {
  60% { transform: rotate(0deg); }
  70% { transform: rotate(-5deg); }
  80% { transform: rotate(0deg); }
  90% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}
</style>
