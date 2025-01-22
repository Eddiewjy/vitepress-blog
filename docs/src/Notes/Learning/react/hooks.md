# useEffect( ) :

用于在函数组件中执行副作用操作。副作用操作包括数据获取、订阅、手动操作 DOM 以及在组件卸载或更新时执行清理操作。useEffect 可以看作是类组件中 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 生命周期方法的组合。

关键参数有两个：回调函数和依赖数组，如果依赖数组为空，回调函数就在==组件挂载==（指组件被创建并插入到 DOM 中的过程。）时候执行一次；不为空时，会监听依赖数组包含的变量，发生改变就触发回调函数。

以下是 useEffect 的基本用法和功能介绍：

### 基本用法

```tsx
import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // 在组件挂载时执行的代码

    console.log("组件挂载"); // 可选的清理函数，在组件卸载时执行

    return () => {
      console.log("组件卸载");
    };
  }, []); // 依赖数组为空，表示只在组件挂载和卸载时执行
  return <div>My Component</div>;
}
```

### 功能介绍

1. **在组件挂载时执行**： 当依赖数组（第二个参数）为空时，`useEffect` 中的回调函数只会在组件挂载时执行一次。
2. **在组件更新时执行**： 当依赖数组中包含的变量发生变化时，`useEffect`中的回调函数会在组件更新时执行。

```tsx
useEffect(() => {
  console.log("依赖变量发生变化");
}, [dependency]); // 依赖数组中包含 dependency 变量
```

1. **在组件卸载时执行清理操作**： `useEffect`中的回调函数可以返回一个清理函数，该函数会在组件卸载时执行，用于清理副作用。

```tsx
useEffect(() => {
  const handle = setInterval(() => {
    console.log("定时器运行中");
  }, 1000); // 返回清理函数

  return () => {
    clearInterval(handle);

    console.log("定时器已清除");
  };
}, []);
```

1. **依赖数组**： 依赖数组是 `useEffect` 的第二个参数，用于控制副作用的执行时机。依赖数组中的变量发生变化时，`useEffect` 中的回调函数会重新执行。如果依赖数组为空，回调函数只会在组件挂载和卸载时执行。

```tsx
useEffect(() => {
  console.log("依赖变量发生变化");
}, [dependency1, dependency2]); // 依赖数组中含 dependency1 和 dependency2 变量
```

补充内容：
在 React 中，`useEffect` 是一种特殊的 Hook，用于在函数组件中处理副作用（如数据获取、订阅、DOM 操作等）。对于“同步还是异步”的问题，`useEffect` 本身的行为可以从以下几个方面来分析：

---

### 1. **`useEffect` 是同步执行还是异步执行？**

**答案：`useEffect` 是**异步执行**的，具体表现在以下方面：**

- React 会在完成 **DOM 更新** 之后才调用 `useEffect` 中的回调函数。
- 这意味着 `useEffect` 不会阻塞浏览器绘制，它的执行是延迟到浏览器完成屏幕绘制之后才运行的。

**示例：**

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  console.log("Render start"); // 每次组件重新渲染时都会执行

  useEffect(() => {
    console.log("Effect runs"); // 只在 DOM 更新后执行
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**输出顺序：**

```
Render start
Effect runs
```

---

### 2. **`useEffect` 回调中的代码是同步还是异步？**

**答案：`useEffect` 回调中的代码本质上是同步的。**  
虽然 `useEffect` 是异步触发的，但其内部的代码会以同步方式运行。

**示例：**

```jsx
useEffect(() => {
  console.log("Effect starts");
  for (let i = 0; i < 1000000000; i++) {} // 模拟耗时操作
  console.log("Effect ends");
});
```

在 DOM 更新后，`Effect starts` 和 `Effect ends` 会按顺序立即输出，代码是同步执行的。

---

### 3. **`useEffect` 与异步操作的结合**

`useEffect` 的常见用途之一是处理异步操作（如数据获取）。但需要注意的是：

- `useEffect` 的回调函数本身不能直接声明为 `async`，因为返回的清理函数可能不被正确识别。
- 如果需要使用异步操作，可以在回调函数内部声明异步函数。

**示例：**

```jsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  };

  fetchData(); // 调用异步函数
}, []);
```

---

### 4. **`useLayoutEffect` 的区别**

相比 `useEffect`，`useLayoutEffect` 的回调函数是同步执行的：

- `useLayoutEffect` 在 React 完成 DOM 修改后、浏览器绘制之前同步执行。
- 如果副作用需要在屏幕更新前完成（如测量 DOM 大小），推荐使用 `useLayoutEffect`。

**示例对比：**

```jsx
import React, { useEffect, useLayoutEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("useEffect");
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });

  return <div>Hello World</div>;
}
```

**输出顺序：**

```
useLayoutEffect
useEffect
```

---

### 总结

- **`useEffect` 的执行是异步的**，它在 React 完成 DOM 更新之后运行。
- **`useEffect` 回调中的代码是同步的**，如果需要处理异步操作，可以在内部定义异步函数。
- 如果需要在 DOM 更新后立即运行同步代码（例如测量布局），应使用 `useLayoutEffect`。

# useState( ):
