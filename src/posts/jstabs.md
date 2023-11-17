---
icon: 'article'
date: 2023-11-17
category:
  - 前端
tag:
  - JS
editLink: false
---

# JS跨标签页通讯技术

::: info 引言
>在现代Web应用程序中，经常会遇到需要在多个标签页之间进行通讯的情况。传统的JavaScript通讯方式通常是通过浏览
器的cookie、localStorage或者ajax等技术来实现。然而，这些方法都存在各自的限制，无法实现实时的、即时的、灵活的跨标签页通讯

> 本文将介绍一种更为高效的JS跨标签页通讯技术，以解决前端开发中常见的多标签页通讯难题,实现无缝协作与数据共享
:::

## 传统通讯方法的局限性
1. cookie：cookie是存储在用户浏览器中的一小段文本信息，只能在同域名下共享数据，并且每个请求都会带上cookie，会增加网络负载。
2. localStorage：localStorage是HTML5新增的Web存储API，虽然可实现多标签页共享数据，但无法实时更新，无法实现跨标签页通讯。
3. ajax：通过异步请求从服务器获取最新数据，但无法实现实时更新。

## JS跨标签页通讯技术的优势
- JS跨标签页通讯技术允许多个标签页之间实现实时的、即时的通讯，实现无缝协作与数据共享。下面介绍两个主流的JS跨标签页通讯技术。

### Broadcast Channel
- Broadcast Channel 是一个HTML5 API，在不同的标签页之间建立通信通道。每个Broadcast Channel都有一个特定的名字，所有标签页中打开的页面都可以通过该名字进行通讯。当一个标签页发送消息到Broadcast Channel，其他标签页则可以监听到这个消息并做出相应的响应。相对于传统的通讯方式，Broadcast Channel具有以下优势：

1. 即时性：消息传递是实时的，可以在各个标签页之间交流信息。
2. 灵活性：不同标签页之间可以动态添加和移除监听器，达到灵活的通讯方式。
3. 跨域支持：Broadcast Channel也支持不同域名之间的通讯。

发送消息：创建Broadcast Channel 要使用Broadcast Channel，首先需要创建一个新的Broadcast Channel实例。可以通过以下代码在一个页面中创建一个Broadcast Channel实例：

```js
const channel = new BroadcastChannel('myChannel');
channel.postMessage('Hello from Page 1!');
```
监听消息：需要在另一个标签页中创建相同名称的Broadcast Channel，并通过监听message事件来处理收到的消息。以下是监听消息的示例代码：

```js
const channel = new BroadcastChannel('myChannel');

channel.addEventListener('message', (event) => {
  console.log('Received message:', event.data);
});
```
**demo示例**

![示例1](/assets/images/image.png)
![示例2](/assets/images/image2.png)

- 以上示例中，page1.html页面包含一个输入框和发送按钮。当用户在输入框中输入一条消息，并点击发送按钮时，该消息将通过Broadcast Channel发送到所有订阅该Channel的标签页中。在page2.html中，可以看到监听到的消息将在控制台中打印出来。


::: tip 复杂场景

:::
- 实时协作工具： Broadcast Channel可以在多个标签页中实现实时的协作工具，例如团队即时聊天应用或实时协同编辑工具。不同的标签页可以通过Broadcast Channel共享消息，实现实时的文本或多媒体消息传输。所有参与的用户可以即时看到其他人发送的消息或编辑内容，增强协作效率。

- 多标签页数据同步： 在某些场景下，用户可能同时打开多个相同页面的标签页，例如电子商务网站的产品详情页。当用户在其中一个标签页中进行了某种操作（如添加购物车），其他标签页也需要实时更新相应的数据。通过Broadcast Channel，可以实现多标签页之间的数据同步，确保用户在一个标签页中的操作能够即时地反映到其他标签页中。

- 用户通知和提醒： Broadcast Channel可以用于实现即时的用户通知和提醒功能。例如，一个网页应用程序可以将关键事件的通知发送到Broadcast Channel，并在各个标签页中进行监听。这样，不论用户当前所在的标签页，都能实时获取到重要通知，提高用户体验。

- 多标签页的状态同步： 在某些应用中，用户可能会打开多个相同应用程序的标签页，并在其中一个标签页做出了状态变更（如切换登录状态）。Broadcast Channel可以帮助实现标签页间的状态同步，以确保用户在一个标签页上进行的操作能够影响到其他标签页。

- 多标签页会话管理： 如果一个应用程序要求用户在同时打开的多个标签页中只能在一个标签页上进行操作，可以使用Broadcast Channel发送消息来通知其他标签页中的用户被挤下线或无法进行操作。这样可以避免多个标签页间的会话冲突或不一致问题。

### Shared Worker

- Shared Worker是JavaScript提供的一种特殊类型的Web Worker，它可以在多个标签页之间共享同一个后台线程，实现数据共享和通信。

1. 创建Shared Worker 要使用Shared Worker，首先需要在一个或多个标签页中创建一个新的Shared Worker实例。通过以下代码在一个页面中创建一个Shared Worker实例：

```js
const worker = new SharedWorker('shared-worker.js');
```

2. 发送消息 使用Shared Worker发送消息需要通过`worker.port.postMessage`方法发送消息。以下是发送消息的示例代码：

```js
worker.port.postMessage('Hello from Page 1!');
```

3. 监听消息 要在不同的标签页中监听Shared Worker发送过来的消息，需要在每个标签页中创建相同的Shared Worker实例，并通过监听message事件来处理收到的消息。以下是监听消息的示例代码：

```js
const worker = new SharedWorker('shared-worker.js');
worker.port.addEventListener('message', (event) => {
  console.log('Received message:', event.data);
});
```

以上代码创建了相同的Shared Worker实例，并通过`port.addEventListener`监听message事件。当Shared Worker发送消息时，各个标签页将收到并处理这些消息。