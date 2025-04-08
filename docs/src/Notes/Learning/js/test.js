//手写promise race

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      p.then((res) => {
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    }
  });
}

//手写promise all(数组简化版，实际可以传入任意可迭代对象)

function promiseAll(promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError("promises must be an array");
  }
  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise()
        .then((res) => {
          result[index] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
//手写异步
async function f2() {
  return "Hello! ExplainThis!";
}

f2().then((res) => console.log(res));

async function getData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

//手写防抖
function debounce(fn, delay = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

//手写节流
function throttle(fn, delay = 500) {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}

//元编程思想之proxy
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

//装饰器
