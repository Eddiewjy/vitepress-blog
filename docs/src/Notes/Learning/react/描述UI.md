## 组件基础

组件必须大写，否则无法与普通html标签区分；

## 导入导出

#### 默认导出 vs 具名导出：

你可以在一个文件中，选择使用其中一种，或者两种都使用。**但是一个文件里有且仅有一个 _默认_ 导出，但是可以有任意多个 _具名_ 导出。**

组件的导出方式决定了其导入方式。当你用默认导入的方式，导入具名导出的组件时，就会报错。如下表格可以帮你更好地理解它们：

| 语法 | 导出语句                              | 导入语句                                |
| ---- | ------------------------------------- | --------------------------------------- |
| 默认 | `export default function Button() {}` | `import Button from './Button.js';`     |
| 具名 | `export function Button() {}`         | `import { Button } from './Button.js';` |

当使用默认导入时，你可以在 `import` 语句后面进行任意命名。比如 `import Banana from './Button.js'`，如此你能获得与默认导出一致的内容。相反，对于具名导入，导入和导出的名字必须一致。这也是称其为 **具名** 导入的原因！

**通常，文件中仅包含一个组件时，人们会选择默认导出，而当文件中包含多个组件或某个值需要导出时，则会选择具名导出。** 无论选择哪种方式，请记得给你的组件和相应的文件命名一个有意义的名字。我们不建议创建未命名的组件，比如 `export default () => {}`，因为这样会使得调试变得异常困难。

例如从组件库导入某个组件，就使用**具名**，因为有很多部分

```tsx
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
```

## JSX

#### 基本使用规则：

- 必须有一个根标签
- 自闭合标签必须用 `/` 结束

```jsx
// 正确
const element = <img src="image.png" alt="example" />;

// 错误(在一般html可行)
const element = <img src="image.png" alt="example">

```

#### \*高级：jsx转化器：在线或babel

将现有的 HTML 中的所有属性转化 JSX 的格式是很繁琐的。我们建议使用 [转化器](https://transform.tools/html-to-jsx) 将 HTML 和 SVG 标签转化为 JSX。这种转化器在实践中非常有用。但我们依然有必要去了解这种转化过程中发生了什么，这样你就可以编写自己的 JSX 了。

#### JSX小结

- JSX 引号内的值会作为字符串传递给属性。
- 大括号让你可以将 JavaScript 的逻辑和变量带入到标签中。
- 它们会在 JSX 标签中的内容区域或紧随属性的 `=` 后起作用。

## 组件的Props传递

在声明 props 时， **不要忘记 `(` 和 `)` 之间的一对花括号 `{` 和 `}`** ：

```tsx
function Avatar({ person, size }) {
  // ...
}
```

这种语法被称为 [“解构”](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_a_function_parameter)，（[[数组解构（Array Destructuring） | 数组解构]]）可见等价于于从函数参数中读取属性

```tsx
function Avatar(props) {
  let person = props.person;
  let size = props.size; // ...
}
```
