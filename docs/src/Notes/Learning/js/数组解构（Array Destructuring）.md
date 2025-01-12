在轮转数组这题中运用到了**解构交换变量**，现在进行一些小拓展
### 1.  拓展运算符`...`
```js
const [a, ...rest] = [1, 2, 3, 4];
console.log(a);    // 输出: 1
console.log(rest); // 输出: [2, 3, 4]
```
### 2.迭代器 `for...of`
```js
const arr = [[1, 2], [3, 4]];
for (const [a, b] of arr) {
    console.log(a, b);
}
// 输出:
// 1 2
// 3 4
```
