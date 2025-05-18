今天来复习一下 **Promise** 和 **异步编程**。之前只在gpt上看了但是没搬运过来😇

### 1. 什么是异步编程？

::: tip
异步编程的核心目的是: 让代码在等待某些操作（如文件读写、网络请求、定时器等）时不阻塞后续代码的执行。
:::
JavaScript 的 **异步编程** 可以通过以下几种方式实现：

- **回调函数**（callback）
- **Promise**
- **async/await**

### 2. Promise 介绍

**Promise** 是一种用于表示异步操作最终完成（或失败）及其结果值的机制，它是 JavaScript 异步编程的一种优化方式。Promise 用于解决传统回调函数的“回调地狱”问题。（多个callback嵌套）

#### Promise 三种状态

- **Pending**：初始状态，操作尚未完成。
- **Fulfilled**：操作成功完成，返回结果。
- **Rejected**：操作失败，返回失败原因。

#### Promise 的使用

1. **创建一个 Promise**

```javascript
const promise = new Promise((resolve, reject) => {
  // 模拟一个异步操作
  let success = true; // 你可以改变这个值来模拟成功或失败
  setTimeout(() => {
    if (success) {
      resolve("操作成功！"); // 成功时调用 resolve
    } else {
      reject("操作失败！"); // 失败时调用 reject
    }
  }, 1000);
});
```

2. **处理 Promise 的结果**
   - 使用 `.then()` 处理成功的结果。->不准确，then是注册promise的回调函数，如果返回值是普通值，会正常传递给下个then；如果返回值是promise对象，则会等待这个promise对象的结果。
   - 使用 `.catch()` 处理失败的结果。

```javascript
promise
  .then((result) => {
    console.log(result); // 如果 Promise 成功，输出：操作成功！
  })
  .catch((error) => {
    console.log(error); // 如果 Promise 失败，输出：操作失败！
  });
```

### 3. 链式调用

Promise 支持链式调用，也就是说可以在 `.then()` 里返回另一个 Promise，形成链式操作。

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("第一步完成");
  }, 1000);
});

promise
  .then((result) => {
    console.log(result); // 输出：第一步完成
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("第二步完成");
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result); // 输出：第二步完成
  })
  .catch((error) => {
    console.error(error);
  });
```

### 4. Promise.all 和 Promise.race

- **`Promise.all()`**：接收一个 Promise 数组，所有 Promise 完成后才会继续执行（返回的 Promise 成功，且结果是一个数组）。
- **`Promise.race()`**：接收一个 Promise 数组，返回最先完成的 Promise。

```javascript
// Promise.all()
const p1 = new Promise((resolve) => setTimeout(resolve, 1000, "第一"));
const p2 = new Promise((resolve) => setTimeout(resolve, 2000, "第二"));
const p3 = new Promise((resolve) => setTimeout(resolve, 1500, "第三"));

Promise.all([p1, p2, p3]).then((results) => {
  console.log(results); // 输出: ['第一', '第二', '第三']
});

// Promise.race()
Promise.race([p1, p2, p3]).then((result) => {
  console.log(result); // 输出: '第一'（因为 p1 最先完成）
});
```

### 5. async/await

`async` 和 `await` 是基于 Promise 的语法糖，能让异步代码写起来更像同步代码，读起来更直观。

- **`async`**：函数返回一个 Promise。
- **`await`**：等待 Promise 完成，必须在 `async` 函数中使用。

```javascript
// 使用 async/await
async function doSomething() {
  try {
    const result = await new Promise((resolve) =>
      setTimeout(resolve, 1000, "操作完成")
    );
    console.log(result); // 输出：操作完成
  } catch (error) {
    console.error(error);
  }
}

doSomething();
```

#### 异步错误处理

使用 `async/await` 时，错误处理通常通过 `try/catch` 语句来实现，像同步代码一样捕获异常。

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("请求失败:", error);
  }
}
```

---

### 总结

**Promise** 提供了一种*更清晰、可管理* 的方式来处理异步操作，特别是在多个异步操作依赖于彼此时，它比回调函数更易于理解。而 **async/await** 则通过更简洁的语法让异步代码看起来像同步代码，避免了回调地狱的复杂性。

1. promise是一个构造函数，用于返回请求的状态并且执行对应操作。pending状态是执行executor函数后还没有返回，fulfilled是请求成功返回，rejected是请求被拒绝。
2. promise().then((data)=> {reslove(data)}).catch((error)=> {reject(error)})
3. Promise all接受一个promise的可迭代对象包括数组，集合等。并且在所有promise fulfilled以后返回结果在任意一个promise reject的时候他会返回reject。 promise race也是接受一个promise的数组，然后返回第一个完成的 Promise的对象。
4. 异步编程，嗯，可以防止在执行某个代码的时候阻塞后面代码的进行。Javascript 异步编程如何重要，是因为在浏览器中会出现多种容易容易出现阻塞的情况，比如说图片加载、发出请求，异步编程可以实现一定程度的拥塞控制。
5. 不是很熟悉具体代码，但是知道promise的一个好处是可以利用 try catch 捕获错误，比如加载时间过长就报错（网页上出现的未连接就是例子）。一般遇到这种情况我会询问gpt，看一下具体代码咋写然后搬运一下。我的印象里是try后面包裹正常逻辑，即可能出现错误的代码，然后在后面接一个catch语句捕获错误。
6. resolve作用是在请求成功后执行一些操作，就是对返回的数据进行一些操作，然后执行一些请求成功的逻辑。Reject就与之相反，用来捕获连接的错误，然后抛出一些出现错误的逻辑
7. async function getData(url) {
   try {
   const res = await fetch(url);
   const data = await res.json();
   return data;
   } catch (e) {
   console.log(e);
   }
   } 该函数会获取对应url地址返回的数据并且打印，如果出现错误就报错
8. 应该会按照顺序抛出第一个对应的错误处理逻辑，如果有finally的话还会返回finally
9. 可以把请求挂起，要求在获得A之后发出一个请求后再执行B，再执行C
10. new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(1);
    }, 1000);
    });
