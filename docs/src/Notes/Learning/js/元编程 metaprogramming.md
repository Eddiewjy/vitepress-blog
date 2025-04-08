关于元编程的前置可以再回顾一下proxy相关内容，有讲到`Reflect` ，其与`Object`核心的不同就是**不会抛出错误**（而是true or false），设计思路上属于类似api层面，让开发者像操作数据库那样结构化地操作 JS 对象底层行为，很适合**防御性编程。**

# 元编程

和genshin impact没关系，元编程讲的是让程序修改程序，是一种操控代码的行为，借助proxy实现，来看个简单例子

```js
//元编程思想
const target = {
  message1: "abc",
  message2: "def",
};
const handler = {
  get: function (target, props, recevier) {
    if (props === "message1") {
      return "proxy nihao";
    }
    return Reflect.get(...arguments);
  },
};
const proxy = new Proxy.get(target, handler);
console.log(proxy.message1); // proxy nihao
console.log(proxy.message2); // def
console.log(target.message1); // abc
```

可以看到，target对象的内部并没有被直接改变，而是有了一个替身proxy，所有对target的操作都可以通过proxy来实现，proxy会根据handler的定义来决定如何处理这些操作。这就是元编程的核心思想了捏

# 装饰器 Decorator

装饰器是用来增强函数、类、属性、参数等的功能的，采用`@expression`这种格式，和Java中的“注解”很像。装饰器只在运行时调用。装饰器分为普通装饰器（无参）和装饰器工厂（有参）。它在很多元编程场景都有使用，从使用上来看，装饰器可以用来做很多事情，比如：日志、权限校验、性能监控、缓存、事务处理等。
