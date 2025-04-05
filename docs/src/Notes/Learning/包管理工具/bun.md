严格的来说，bun是一个包管理器，Bun则对标的是nodejs，是一个js的运行环境。bun是Bun的内置包管理工具（阿巴阿巴）

> Bun is a fast JavaScript runtime, package manager, bundler, and test runner.

# 什么是运行时（runtime）？

JavaScript（或正式名称 ECMAScript）只是一种编程语言的 规范。任何人都可以编写一个 JavaScript 引擎，用于接收并执行有效的 JavaScript 程序。目前最流行的两个 JavaScript 引擎是 V8（由 Google 开发） 和 JavaScriptCore（由 Apple 开发）。这两个 JavaScript 引擎都是开源的。

但大多数 JavaScript 程序都不是在真空中运行的。它们需要一种访问外部世界的方式来执行有用的任务。这就是 运行时（runtimes） 的用武之地。运行时实现了额外的 API，这些 API 可供运行时执行的 JavaScript 程序调用。

### 浏览器

值得注意的是，浏览器内置的 JavaScript 运行时实现了一系列特定于 web 的 API，这些 API 通过全局对象 window 对外公开。浏览器执行的任何 JavaScript 代码都可以使用这些 API 在当前网页的上下文中实现交互或动态行为。

### Node.js

同样，Node.js 是一种 JavaScript 运行时，可用于服务器等非浏览器环境。由 Node.js 执行的 JavaScript 程序可以访问一组 Node.js 特有的 globals，如 Buffer、process 和 \_\_dirname等，此外还可以访问用于执行操作系统级任务的内置模块，如读写文件（node:fs）和网络通讯（node:net、node:http）。Node.js 还实现了基于 CommonJS 的模块系统和解析算法，这比 JavaScript 原生的模块系统出现的更早。

**Bun 被设计为更快、更精简、更先进的 Node.js 的替代品。**

Bun 未来会朝着一站式工具包的方向发展，涵盖nodejs，jest，webpack，esbuild，babel，yarn，postcss等功能。