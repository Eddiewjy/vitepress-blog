<template>
  <div class="px-6 pb-24 mt-2 md:pb-32 md:px-12 lg:px-16">
    <div class="flex flex-col items-center max-w-2xl mx-auto">

      <!-- 头像 -->
      <div class="mt-8">
        <img class="block mx-auto rounded-full w-28 h-28" src="./img/avatar.jpg" alt="avatar" />
      </div>

      <!-- 名字 + 一句话 -->
      <h1 class="mt-6 text-3xl font-bold tracking-tight text-center sm:text-4xl text-stone-800 dark:text-stone-100">
        Eddie Wu
      </h1>
      <p class="mt-2 text-base tracking-wide text-center text-stone-400 dark:text-stone-500">
        Geek · Front-End Developer · Lifelong Learner
      </p>
      <p class="mt-1 text-sm text-center text-stone-400 dark:text-stone-500">
        一个喜欢与他人交流的开发者
      </p>

      <!-- 分隔 -->
      <div class="w-10 h-px my-10 bg-stone-300 dark:bg-stone-600"></div>

      <!-- 座右铭 -->
      <section class="w-full text-center">
        <p class="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500">Motto</p>
        <h2 class="mt-3 text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-100 sm:text-3xl">
          <span class="text-amber-600 dark:text-amber-400">Determination</span> Is All You Need
        </h2>
        <p class="mt-2 font-serif text-lg tracking-widest text-stone-500 dark:text-stone-400">
          古之立大事者，不惟有超世之才，亦必有<span class="font-bold text-amber-700 dark:text-amber-400">坚忍不拔之志</span>。
        </p>
      </section>

      <!-- 分隔 -->
      <div class="w-10 h-px my-10 bg-stone-300 dark:bg-stone-600"></div>

      <!-- 个人标签 -->
      <section class="w-full text-center">
        <p class="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500">About</p>
        <div class="flex flex-wrap justify-center gap-3 mt-4">
          <span
            class="px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 border border-stone-200 dark:text-stone-300 dark:border-stone-700">Computer
            Science</span>
          <span
            class="px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 border border-stone-200 dark:text-stone-300 dark:border-stone-700">Software
            Engineering</span>
          <span
            class="px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 border border-stone-200 dark:text-stone-300 dark:border-stone-700">Pop
            & R&B</span>

        </div>
      </section>

      <!-- 分隔 -->
      <div class="w-10 h-px my-10 bg-stone-300 dark:bg-stone-600"></div>

      <!-- 技术栈 -->
      <section class="w-full">
        <p class="text-xs font-medium tracking-[0.2em] uppercase text-center text-stone-400 dark:text-stone-500">Tech
          Stack</p>
        <div class="mt-5 overflow-hidden">
          <div class="flex gap-4 w-fit icon-scroll">
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img src="./img/react.svg" alt="React" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img src="./img/vue.svg" alt="Vue" />
            </div>
            <div class="flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img src="./img/html.svg" alt="HTML" />
            </div>
            <div class="flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img src="./img/css.svg" alt="CSS" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img src="./img/tailwind.svg" alt="Tailwind" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img class="rounded" src="./img/js.webp" alt="JavaScript" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img class="rounded" src="./img/ts.svg" alt="TypeScript" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img class="rounded" src="./img/vite.svg" alt="Vite" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img class="rounded" src="./img/nextjs.svg" alt="Next.js" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img class="rounded" src="./img/redux.svg" alt="Redux" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-100 dark:bg-stone-800">
              <img class="rounded" src="./img/pnpm.svg" alt="pnpm" />
            </div>
            <div class="flex justify-center flex-shrink-0 p-3 rounded-lg w-14 h-14 bg-stone-800 dark:bg-stone-900">
              <img class="rounded" src="./img/node.svg" alt="Node.js" />
            </div>
          </div>
        </div>
      </section>

      <!-- 分隔 -->
      <div class="w-10 h-px my-10 bg-stone-300 dark:bg-stone-600"></div>

      <!-- 经历 -->
      <section class="w-full">
        <p class="text-xs font-medium tracking-[0.2em] uppercase text-center text-stone-400 dark:text-stone-500">
          Experience</p>
        <div class="mt-6 space-y-6">
          <!-- 实习经历 -->
          <div>
            <h3 class="text-sm font-medium text-stone-400 dark:text-stone-500">Internship</h3>
            <div class="mt-3 space-y-4">
              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-1 h-full min-h-[2.5rem] rounded-full bg-amber-500"></span>
                <div>
                  <p class="font-semibold text-stone-800 dark:text-stone-100">哈啰普惠科技有限公司</p>
                  <p class="text-sm text-stone-500 dark:text-stone-400">前端开发实习生</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-1 h-full min-h-[2.5rem] rounded-full bg-amber-500"></span>
                <div>
                  <p class="font-semibold text-stone-800 dark:text-stone-100">Virtuals Protocol</p>
                  <p class="text-sm text-stone-500 dark:text-stone-400">DevRel 开发者关系工程师</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 黑客松 & 项目 -->
          <div>
            <h3 class="text-sm font-medium text-stone-400 dark:text-stone-500">Hackathon & Projects</h3>
            <div class="mt-3 space-y-4">
              <div class="flex items-start gap-4">
                <span
                  class="flex-shrink-0 w-1 h-full min-h-[2.5rem] rounded-full bg-amber-400 dark:bg-amber-500"></span>
                <div>
                  <p class="font-semibold text-stone-800 dark:text-stone-100">AdventureX 杭州黑客松 <span
                      class="text-amber-600 dark:text-amber-400">Virtuals 赛道冠军</span></p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span
                  class="flex-shrink-0 w-1 h-full min-h-[2.5rem] rounded-full bg-amber-400 dark:bg-amber-500"></span>
                <div>
                  <p class="font-semibold text-stone-800 dark:text-stone-100">ETH 深圳黑客松 <span
                      class="text-amber-600 dark:text-amber-400">Innovative Dapps 冠军</span></p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span
                  class="flex-shrink-0 w-1 h-full min-h-[2.5rem] rounded-full bg-amber-400 dark:bg-amber-500"></span>
                <div>
                  <p class="font-semibold text-stone-800 dark:text-stone-100">I-MD — 智能开源 Markdown 编辑器</p>
                  <p class="text-sm text-stone-500 dark:text-stone-400">独立设计词法解析引擎 · 字节跳动青训营优秀项目</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 分隔 -->
      <div class="w-10 h-px my-10 bg-stone-300 dark:bg-stone-600"></div>

      <!-- 音乐 & 运动 -->
      <section class="w-full">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- 音乐 -->
          <div class="relative h-64 overflow-hidden rounded-xl">
            <div class="absolute w-full h-full bg-center bg-no-repeat bg-cover music-bg"></div>
            <div class="relative flex flex-col justify-between h-full p-5">
              <p class="text-xs font-medium tracking-[0.2em] uppercase text-white/60">Music</p>
              <div>
                <p class="text-2xl font-bold text-amber-300">Pop · R&B · Rap</p>
                <p class="mt-1 text-sm text-white/50">"我想呼风唤雨~"</p>
              </div>
            </div>
          </div>

          <!-- 运动 -->
          <div class="relative h-64 overflow-hidden rounded-xl">
            <div class="absolute w-full h-full bg-center bg-no-repeat bg-cover sport-bg"></div>
            <div class="relative flex flex-col justify-between h-full p-5">
              <p class="text-xs font-medium tracking-[0.2em] uppercase text-white/60">Spirit</p>
              <div>
                <p class="text-2xl font-bold text-white">Chris</p>
                <p class="mt-1 text-sm text-white/50">Daddy's Home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.music-bg {
  background-image: url("./img/music.jpg");
  filter: brightness(0.4);
}

.sport-bg {
  background-image: url("./img/sport.jpg");
  filter: brightness(0.4);
}

.icon-scroll {
  animation: iconScroll 15s linear infinite;
}

@keyframes iconScroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-20%);
  }
}
</style>
