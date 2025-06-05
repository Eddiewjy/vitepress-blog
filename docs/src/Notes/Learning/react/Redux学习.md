# 基本介绍

1. store是一个存储状态的容器，只读
2. state是存储在store中的数据，可以驱动view视图的变化
3. action是描述状态变化的对象，包含type和payload
4. reducer是一个纯函数，接收当前state和action，返回新的state
5. dispatch是一个函数，用于发送action到reducer
6. subscribe是一个函数，用于监听state的变化

redux遵守`订阅发布`模式，store是发布者，组件是订阅者。
