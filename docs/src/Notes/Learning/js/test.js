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
console.log(proxy.age); // 30
console.log("age" in proxy); // true

delete proxy.age; // 删除 age
console.log(proxy.age); // undefined
