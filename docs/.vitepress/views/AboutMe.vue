<template>
  <div class="px-6 pb-24 mt-2 md:pb-32 md:px-12 lg:px-16">
    <div class="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <!-- 头像与徽章 -->
      <div class="relative w-full mx-auto">
        <!-- 头像 -->
        <div class="relative py-2 h-52">
          <div
            class="absolute w-48 h-48 mx-auto rounded-full shadow-[0px_0px_3px#147eae] dark:shadow-[0px_0px_3px#9ba0a9] top-1/2 avatar-ping left-1/2">
          </div>
          <img class="block w-48 h-48 mx-auto rounded-full" src="./img/avatar.jpg" alt="avatar" />
        </div>
        <!-- Right-tags -->
        <p style="top: 32%"
          class="tag-bounce hidden sm:block sm:left-[69%] md:left-[66%] lg:left-[63%] xl:left-[60%] absolute px-3 py-0.5 text-sm font-bold rounded-full shadow-[0px_0px_1px_1px#eee]">
          🎵 跟风欧美流行
        </p>
        <p style="top: 60%"
          class="tag-bounce hidden sm:block sm:left-[69%] md:left-[66%] lg:left-[63%] xl:left-[60%] absolute px-3 py-0.5 text-sm font-bold rounded-full shadow-[0px_0px_1px_1px#eee]">
          球场摸鱼之道 🏀
        </p>
        <!-- Left-tags -->
        <p style="top: 32%"
          class="tag-bounce hidden sm:block sm:left-[8%] md:left-[13%] lg:left-[21%] xl:left-[27%] absolute px-3 py-0.5 text-sm font-bold rounded-full shadow-[0px_0px_1px_1px#eee]">
          🔥 头怎么尖尖的
        </p>
        <p style="top: 60%"
          class="tag-bounce hidden sm:block sm:left-[8%] md:left-[13%] lg:left-[21%] xl:left-[27%] absolute px-3 py-0.5 text-sm font-bold rounded-full shadow-[0px_0px_1px_1px#eee]">
          ai依赖患者 💬
        </p>
      </div>
      <!-- 概述与箴言 -->
      <div class="flex flex-col w-full mt-4">
        <div class="flex flex-col justify-between gap-5 md:gap-0 md:flex-row">
          <!-- 概述 -->
          <div
            class="dark:from-sky-700 dark:to-teal-600 dark:border-slate-900 w-full flex flex-col justify-center rounded-xl border py-4 px-8 text-white md:w-[59%] bg-gradient-to-r from-sky-400 to-teal-400">
            <p class="text-lg text-slate-50">你好, 我是Eddie 👋</p>
            <h1 class="text-2xl font-bold xl:text-3xl lg:break-normal lg:break-words">
              A Passionate Fixer🦾 Developer🕵️ Thinker🤔
            </h1>
            <p class="text-slate-100">一个喜欢与他人交流的开发者</p>
          </div>
          <!-- 箴言 -->
          <div
            class="bg-stripe dark:border-slate-900 dark:bg-slate-800 md:w-[39%] w-full rounded-xl border p-4 bg-slate-50">
            <p class="text-[15px]">motto座右铭</p>
            <div>
              <h1 class="text-3xl leading-9">
                <span class="hidden font-bold text-teal-400 md:inline-block">Determination&nbsp;
                </span>
                <span class="hidden lg:inline-block"> Is All You Need</span>
              </h1>
              <h1 class="font-serif text-xl tracking-widest md:text-2xl lg:text-2xl">
                古之立大事者，不惟有超世之才，亦必有<span class="font-bold text-sky-500">坚忍不拔之志</span>。
              </h1>
              <h1 class="text-2xl leading-9 md:text-3xl">
                <span class="inline-block font-bold text-teal-400 md:hidden">Determination&nbsp;
                </span>
                <span class="inline-block lg:hidden">Is All You Need</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <!-- 简介与技术栈 -->
      <div class="flex flex-col justify-between w-full gap-5 mt-4 md:gap-0 md:flex-row">
        <!-- 简介 -->
        <div
          class="bg-stripe w-full md:w-[35%] bg-slate-50 border dark:bg-slate-800 dark:border-slate-900 p-4 rounded-xl">
          <p class="text-[15px]">个人标签</p>
          <div class="mt-2">
            <h1 class="text-xl">
              Major in <span class="text-yellow-200">Computer Science 💻</span>
            </h1>
            <h1 class="text-xl">
              Keen on <span class="text-pink-500">Softwear Engineering 🛠️</span>
            </h1>
            <h1 class="text-xl lg:text-xl md:text-base">开源爱好者</h1>
            <p></p>
          </div>
        </div>
        <!-- 技术栈 -->
        <div class="w-full md:w-[62%] dark:border-slate-900 border dark:bg-slate-800 bg-slate-50 p-4 rounded-xl">
          <p class="text-[15px]">不定期上新的 tech stack</p>
          <div class="mt-2 overflow-hidden">
            <!-- TODO:封装ICON组件,抽离背景颜色与svg地址 -->
            <div class="flex gap-4 w-fit icon-scroll">

              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-blue-100 rounded-lg">
                <img src="./img/react.svg" alt="" />
              </div>
              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-green-200 rounded-lg">
                <img src="./img/vue.svg" alt="" />
              </div>
              <div class="flex-shrink-0 w-20 h-20 p-4 bg-red-200 rounded-lg">
                <img src="./img/html.svg" alt="" />
              </div>
              <div class="flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-sky-200">
                <img src="./img/css.svg" alt="" />
              </div>
              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-slate-200">
                <img src="./img/tailwind.svg" alt="" />
              </div>
              <div class="flex justify-center w-20 h-20 p-4 flex-shrink-0 rounded-lg bg-[#f7cb4f]">
                <img class="rounded-lg" src="./img/js.webp" alt="" />
              </div>
              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-gray-200 rounded-lg">
                <img class="rounded-lg" src="./img/ts.svg" alt="" />
              </div>
              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-purple-100 rounded-lg">
                <img class="rounded-lg" src="./img/vite.svg" alt="" />
              </div>
              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-slate-200">
                <img class="rounded-lg" src="./img/nextjs.svg" alt="" />
              </div>
              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-purple-100 rounded-lg">
                <img class="rounded-lg" src="./img/redux.svg" alt="" />
              </div>
              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-yellow-200 rounded-lg">
                <img class="rounded-lg" src="./img/pnpm.svg" alt="" />
              </div>
              <div class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-zinc-900">
                <img class="rounded-lg" src="./img/node.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 图片与荣誉 -->
      <div class="flex flex-col justify-between w-full gap-5 mt-4 md:gap-0 md:flex-row">
        <!-- 图片 -->
        <div class="w-full md:w-[45%] honer-bg  bg-no-repeat bg-left-top bg-cover rounded-xl h-62 sm:h-auto"></div>
        <!-- 荣誉 -->
        <div
          class="bg-stripe w-full md:w-[50%] bg-slate-50 border dark:bg-slate-800 dark:border-slate-900 p-4 rounded-xl">
          <p class="text-[15px]">experience</p>
          <h1 class="mt-2 text-4xl font-bold">一些经历</h1>
          <div class="mt-4 md:text-base lg:text-xl">
            <p class="py-1 font-semibold text-blue-400">2025/3 IMD —— 智能开源Markdown编辑器，独立设计并实现词法解析引擎，顺利结项（字节跳动青训营优秀项目）
            </p>
            <p class="py-1 font-semibold text-indigo-400">2025/7 AdventureX杭州黑客松 Virtuals赛道冠军🏆</p>
            <p class="py-1 font-semibold text-green-400">2025/8 ETH深圳黑客松 Innovative Dapps冠军🏆</p>
            <p class="py-1 text-lg font-semibold text-red-400">2025/5～2025/8 哈啰普惠科技有限公司 前端开发实习生</p>
            <p class="py-1 font-semibold" style="color: #de73ff">2025/8~now Virtuals Protocol DevRel开发者关系工程师</p>

          </div>
        </div>
      </div>

      <!-- 音乐/运动 -->
      <div class="flex flex-col justify-between w-full gap-5 mt-4 md:gap-0 md:flex-row ">
        <!-- 音乐 -->
        <div class="w-full md:w-[39%] rounded-xl min-h-[13rem] h-72 md:h-auto relative overflow-hidden sm:h-auto">
          <div class="absolute w-full h-full bg-center bg-no-repeat bg-cover music-bg"></div>
          <div class="relative flex flex-col justify-between h-full p-4">
            <p class="text-[15px] text-slate-200">preference on music</p>
            <h1 class="mt-1.5 text-4xl font-bold text-pink-300">Pop</h1>
            <h1 class="mt-1.5 text-4xl font-bold text-sky-500">R&B</h1>
            <h1 class="mt-1.5 text-4xl font-bold text-indigo-500">Rap</h1>
            <p class="self-end mt-2 text-right text-bg text-slate-400 ">"我想呼风唤雨~"</p>
          </div>
        </div>

        <!-- 运动 -->
        <div class="relative w-full md:min-h-[20rem] h-72 overflow-hidden md:w-[58%] rounded-xl sm:h-80">
          <div class="absolute w-full h-full bg-center bg-no-repeat bg-cover sport-bg"></div>
          <div class="relative flex flex-col justify-between h-full p-4">
            <p class="text-[15px] text-slate-50">精神氮泵</p>
            <h1 class="flex-1 mt-2 text-5xl font-bold text-black">Chris</h1>
            <p class="self-end mt-2 text-sm text-right text-gray-800">
              Daddy's Home
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.honer-bg {
  background-image: url("./img/honer.jpg");
}

.music-bg {
  background-image: url("./img/music.jpg");
  filter: brightness(0.6);
}



.sport-bg {
  background-image: url("./img/sport.jpg");
  filter: brightness(0.6);
}



.avatar-ping {
  animation: avatarPing 2s ease-in infinite;
}

@keyframes avatarPing {

  0%,
  100% {
    transform: translateX(-50%) translateY(-50%) scale(1.05);
  }

  50% {
    transform: translateX(-50%) translateY(-50%) scale(1.1);
  }
}

.tag-bounce {
  animation: tagBounce 1.5s ease-in infinite;
}

@keyframes tagBounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10%);
  }
}

.icon-scroll {
  animation: iconScroll 10s linear infinite;
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
