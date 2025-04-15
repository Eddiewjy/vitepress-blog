# 既生HTTP，何生WebSocket

## 长轮询

TCP本是全双工协议，http1.1的设计只利用了半双工。
为了实现服务端向客户端推送数据，采用了`长轮询` 的方式。即客户端向服务端发送请求，服务端不立即响应，而是保持连接，直到有数据可用时才返回响应。这样可以实现服务端向客户端推送数据，但会增加延迟和资源消耗。

## WebSocket

WebSocket是H5引入的一种新的协议，它在HTTP协议的基础上进行了改进，允许在客户端和服务器之间建立持久的双向通信通道。WebSocket协议使用了一个特殊的HTTP请求来建立连接，然后在连接建立后，客户端和服务器可以随时发送数据，而不需要每次都建立新的连接。

### 建联过程（网易面试）

1. TCP三次握手后，客户端发送一个HTTP请求，请求头中包含`Upgrade: websocket`和`Connection: Upgrade`字段，表示要升级到WebSocket协议。
2. 服务器返回“101 Switch Protocols”，表示协议切换成功，并返回一个`Sec-WebSocket-Accept`字段，表示服务器接受了WebSocket连接。

## 注意点

- WebSocket和HTTP是不同的协议，WebSocket是基于TCP的，而HTTP是基于应用层的协议（h3就是基于quic协议，一个改进的udp）。前者只是建联的时候借助了http，并非基于http
- WebSocket和socket也没有关系，socket是操作系统提供的API，用于网络通信，处于传输层和应用层之间。WebSocket是基于socket的，但它是一个应用层协议，提供了更高层次的抽象。
