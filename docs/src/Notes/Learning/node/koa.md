---
title: "koa学习记录"
desc: "随便看了下后端框架"
tags: "node后端"
updateTime: "2025-04-05 11:25"
---

koa简单来说就是基于 express的轻量级框架，吸收了js异步代码。看了一下阮老师发的koa，发现了一个核心：中间件☝️

# Middleware

宏观来说，介于request和response之间的都是中间件。

## 执行栈

koa的执行是堆栈式的
![mw](..\img\middleware.png)
教程里一般用`next()`演示，通过打印1234321来表现冒泡🫧返回的特点

## 使用方式
思考了一下，目前没有项目需要这个，就先不搞了