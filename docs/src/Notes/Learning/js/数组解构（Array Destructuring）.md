在[189. 轮转数组](https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150)这题中运用到了**解构交换变量**，现在进行一些小拓展

### 1. 拓展运算符`...`

`...`有两种用法：

1. spread，意为展开，把数组展开成单独的元素
2. rest，意为收集，把单独的元素收集成数组

用起来刚好是两种相反的方式

```js
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5]; // 展开
console.log(arr2); // 输出: [1, 2, 3, 4, 5]
const [a, b, ...rest] = arr; // 收集
console.log(a, b); // 输出: 1 2
console.log(rest); // 输出: [3]
```

### 2.迭代器 `for...of`

只要能被for...of枚举就是**可迭代对象**，这是定义

```js
const arr = [
  [1, 2],
  [3, 4]
];
for (const [a, b] of arr) {
  console.log(a, b);
}
// 输出:
// 1 2
// 3 4
```
