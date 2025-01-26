function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello!");
};

const p1 = new Person("Alice");
p1.sayHello(); // 输出：Hello!

Person.prototype.sayHello = function () {
  console.log("Hi!");
};

const p2 = new Person("Bob");
p2.sayHello(); // 输出：Hi!
p1.sayHello(); // 输出：Hi!
