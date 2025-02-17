# Proxy

这可以用于实目标对象的热更新。

### 解析

Proxy 是 ES6 引入的一个功能，它允许创建一个代理对象，用于**拦截**和**自定义**对目标对象的基本操作，例如读取属性、设置属性、删除属性等。

### 用法

```js
const proxy = new Proxy(target, handler);
```

`target` 是拦截对象，用于指明代理对象（如听一席话

`handler` 是拦截器，是实现拦截方法的核心。以下是常用的 handler 方法：

- `get(target, prop)`：拦截属性读取。

```js
const obj = { name: "Alice", age: 25 };

const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log(`读取属性: ${prop}`);
    return target[prop] ?? "属性不存在";
  },
});

console.log(proxy.name); // 读取属性: name -> "Alice"
console.log(proxy.gender); // 读取属性: gender -> "属性不存在"
```

- `set(target, prop, value)`：拦截属性修改。

```js
const proxy = new Proxy(
  {},
  {
    set(target, prop, value) {
      if (prop === "age" && typeof value !== "number") {
        throw new Error("年龄必须是数字！");
      }
      console.log(`设置属性: ${prop} -> ${value}`);
      target[prop] = value;
      return true; // 必须返回 `true` 表示成功
    },
  }
);

proxy.age = 30; // 设置属性: age -> 30
// proxy.age = "30"; // ❌ 抛出错误
```

- `has(target, prop)`：拦截in操作符，判断属性是否存在。

```js
const proxy = new Proxy(
  { secret: "Hidden" },
  {
    has(target, prop) {
      if (prop === "secret") return false;
      return prop in target;
    },
  }
);

console.log("secret" in proxy); // false
console.log("toString" in proxy); // true
```

- `deleteProperty(target, prop)`:拦截 delete 操作

```js
const proxy = new Proxy(
  { name: "Alice" },
  {
    deleteProperty(target, prop) {
      console.log(`删除属性: ${prop}`);
      delete target[prop];
      return true;
    },
  }
);
delete proxy.name; // 删除属性: name
```

- `apply(target, thisArg, args)`：拦截函数调用。

```js
const sum = (a, b) => a + b;

const proxy = new Proxy(sum, {
  apply(target, thisArg, args) {
    console.log(`调用函数: sum(${args.join(", ")})`);
    return target(...args);
  },
});

console.log(proxy(2, 3)); // 调用函数: sum(2, 3) -> 5
```

# Reflect

`Reflect` 是ES6新增的全局对象，能够让Proxy拦截时更简洁安全。简而言之，使用proxy时返回reflect对象更好。

### **💡 为什么 `Proxy` 需要 `Reflect`？**

**1. 让 `Proxy` 拦截后仍然能执行默认操作**

- 如果 `Proxy` 只拦截但不返回值，默认行为会丢失。
- `Reflect` 能简化代码，保证拦截后还能执行原始行为。

**2. 让 `set` 等操作返回 `true`**

- `Proxy` 的 `set` 必须返回 `true`，否则会报 `TypeError`。
- `Reflect.set()` 自动返回 `true`，避免手写 `return true`。

**3. 让 `this` 绑定正确**

- `Reflect` 调用时 `this` 绑定 `target`，不会像直接调用 `target[prop]` 那样出错。

---

### **🚀 使用 `Reflect` 让 `Proxy` 更稳定**

#### **1️⃣ `Reflect.get()` 让 `get` 拦截更安全**

✅ **问题**：如果 `get` 只是 `target[prop]`，当 `prop` 不存在时可能会有 `undefined` 的问题。  
✅ **解决**：`Reflect.get()` 让 `get` 更稳定，并确保 `this` 绑定正确。

```js
const obj = { name: "Alice", age: 25 };

const proxy = new Proxy(obj, {
  get(target, prop, receiver) {
    console.log(`读取属性: ${prop}`);
    return Reflect.get(target, prop, receiver); // ✅ 让默认行为继续
  },
});

console.log(proxy.name); // 读取属性: name -> "Alice"
console.log(proxy.age); // 读取属性: age -> 25
```

---

#### **2️⃣ `Reflect.set()` 确保 `set` 赋值后返回 `true`**

✅ **问题**：`Proxy.set` **必须返回 `true`**，否则赋值会报错！  
✅ **解决**：用 `Reflect.set()`，它默认返回 `true`。

```js
const obj = { name: "Alice" };

const proxy = new Proxy(obj, {
  set(target, prop, value, receiver) {
    console.log(`修改属性: ${prop} -> ${value}`);
    return Reflect.set(target, prop, value, receiver); // ✅ 让赋值继续
  },
});

proxy.name = "Bob"; // 修改属性: name -> Bob
console.log(proxy.name); // Bob
```

❌ **如果不返回 `true`，赋值会失败**：

```js
const proxy2 = new Proxy(obj, {
  set(target, prop, value) {
    console.log(`修改 ${prop}`);
    // ❌ 没有返回 true，JS 会报错！
  },
});

proxy2.name = "Charlie"; // ❌ TypeError: 'set' on proxy returned false
```

---

#### **3️⃣ `Reflect.has()` 让 `in` 运算符拦截更干净**

✅ **问题**：拦截 `in` 时，需要保证默认行为仍然执行。  
✅ **解决**：`Reflect.has()` 让 `in` 判断更直观。

```js
const obj = { name: "Alice", age: 25 };

const proxy = new Proxy(obj, {
  has(target, prop) {
    console.log(`检查 ${prop} 是否存在`);
    return Reflect.has(target, prop); // ✅ 让 `in` 仍然能用
  },
});

console.log("name" in proxy); // 检查 name 是否存在 -> true
console.log("gender" in proxy); // 检查 gender 是否存在 -> false
```

---

#### **4️⃣ `Reflect.deleteProperty()` 确保 `delete` 操作正常**

✅ **问题**：删除属性时，如果 `delete target[prop]`，可能会出错。  
✅ **解决**：用 `Reflect.deleteProperty()`，返回 `true` 让 `delete` 继续。

```js
const obj = { name: "Alice", age: 25 };

const proxy = new Proxy(obj, {
  deleteProperty(target, prop) {
    console.log(`删除属性: ${prop}`);
    return Reflect.deleteProperty(target, prop); // ✅ 确保 `delete` 可执行
  },
});

delete proxy.age; // 删除属性: age
console.log(proxy.age); // undefined
```

---

### **📌 总结**

✅ **`Reflect` 让 `Proxy` 更稳定、简洁**  
✅ **拦截后还能执行默认行为，不影响 `this` 绑定**  
✅ **用 `Reflect.set()` 让 `set` 返回 `true`，避免 `TypeError`**  
✅ **避免手写 `target[prop]`，让 `Proxy` 代码更规范**

### **🔥 最佳实践：使用 `Reflect` 处理 Proxy**

```js
const obj = { name: "Alice", age: 25 };

const proxy = new Proxy(obj, {
  get: (target, prop, receiver) => Reflect.get(target, prop, receiver),
  set: (target, prop, value, receiver) =>
    Reflect.set(target, prop, value, receiver),
  has: (target, prop) => Reflect.has(target, prop),
  deleteProperty: (target, prop) => Reflect.deleteProperty(target, prop),
});

console.log(proxy.name); // "Alice"
proxy.age = 30; // 赋值正常
console.log("age" in proxy); // true
delete proxy.age; // 删除 age
console.log(proxy.age); // undefined
```

---

# Q&A

### 1. 请对比：Proxy vs. Object.defineProperty

Proxy 相比 Object.defineProperty 主要有以下优点：

1. **拦截整个对象**：Proxy 作用于整个对象，而 Object.defineProperty 只能作用于特定属性。
2. **支持新增和删除**：Object.defineProperty 不能监听新增/删除属性，而 Proxy 可以通过 `set` 和 `deleteProperty` 进行拦截。
3. **支持更多操作**：Proxy 除了 `get` 和 `set`，还能拦截 `has`、`deleteProperty`、`ownKeys` 等多个行为。
4. **适用于数组和函数**：Proxy 可以直接拦截数组的方法调用（如 `push`），但 Object.defineProperty 不能。

### 2. 说出Proxy 的拦截方法(5个以上)

常见的 Proxy 拦截方法：

- **属性访问**：

  - `get(target, prop, receiver)`：拦截属性读取
  - `set(target, prop, value, receiver)`：拦截属性赋值
  - `has(target, prop)`：拦截 `in` 操作符
  - `deleteProperty(target, prop)`：拦截 `delete obj.prop`

- **对象结构**：

  - `ownKeys(target)`：拦截 `Object.keys()` 和 `for...in`
  - `getOwnPropertyDescriptor(target, prop)`：拦截 `Object.getOwnPropertyDescriptor()`
  - `defineProperty(target, prop, descriptor)`：拦截 `Object.defineProperty()`

- **对象扩展性**：

  - `isExtensible(target)`：拦截 `Object.isExtensible()`
  - `preventExtensions(target)`：拦截 `Object.preventExtensions()`

- **原型相关**：

  - `getPrototypeOf(target)`：拦截 `Object.getPrototypeOf()`
  - `setPrototypeOf(target, prototype)`：拦截 `Object.setPrototypeOf()`

- **函数 & 构造器**：
  - `apply(target, thisArg, args)`：拦截函数调用
  - `construct(target, args, newTarget)`：拦截 `new` 关键字

### 3. get 和 set 拦截器

get读取属性，返回`target[prop]` ;
set设置属性，`target[prop] = value`, **必须返回** `true`
