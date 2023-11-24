---
icon: article
category:
  - 前端技术随笔
tag:
  - JS

editLink: false
---

# 点击拖拽鼠标事件

::: info 引言
mousedown、mousemove、mouseup 是鼠标事件的三个主要事件，通常用于实现与鼠标交互的功能。
:::


## mousedown（鼠标按下）：

用于启动一些需要鼠标点击触发的操作，比如拖拽、绘图等。
在这个事件中，你可以获取鼠标点击的位置，以便在后续的移动事件中使用。
可以用于实现一些自定义的上下文菜单或者其他与鼠标点击相关的交互。


## mousemove（鼠标移动）：

用于实时追踪鼠标的移动，通常用于拖拽、画布绘制等需要实时反馈的场景。
在这个事件中，你可以获取鼠标当前的位置，计算鼠标移动的距离，实现相应的交互效果。
可以用于创建一些需要根据鼠标位置变化而变化的元素。


## mouseup（鼠标释放）：

用于在鼠标释放时触发一些操作，比如停止拖拽、完成绘图等。
在这个事件中，你可以执行一些最终的处理逻辑，比如保存状态、发送数据等。
通常用于标志着鼠标操作的结束，可以在这个事件中清理一些临时状态。
这三个事件常常结合使用，例如在mousedown事件中初始化一些状态，然后在mousemove事件中根据鼠标的移动更新界面，最后在mouseup事件中完成一些收尾工作。这种结合使用的模式常见于实现拖拽、绘图等需要与鼠标位置相关的交互功能。在处理这些事件时，需要小心避免内存泄漏，确保在不需要时移除事件监听器。


## 案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .game-container {
      width: 400px;
      height: 400px;
      border: 1px dashed #eaeaea;
      position: relative;
      box-sizing: border-box;
    }

    .tile {
      width: 90px;
      height: 90px;
      background-color: antiquewhite;
      position: absolute;
    }
    * {
      margin: 0;
      padding: 0;
    }
  </style>
</head>

<body>
  <div class="game-container">
    <div class="tile"></div>
  </div>
</body>
<script>
window.onload = function () {
  var isDragging = false;
  var offsetX, offsetY;
  var draggableElement = document.querySelector('.tile')
  var parentEl = document.querySelector('.game-container')
  let MaxW = parentEl.clientWidth
  let MaxH = parentEl.clientHeight
  draggableElement.addEventListener('mousedown', function (e) {
    isDragging = true;

    // 获取鼠标点击位置与元素左上角的偏移
    offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    // 添加mousemove和mouseup事件监听器
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
  });
  function dragMove(e) {
    if (isDragging) {
      let dx = e.clientX - offsetX
      let dy = e.clientY - offsetY
      dx = Math.min(Math.max(dx,0), MaxW- draggableElement.clientWidth)
      dy = Math.min(Math.max(dy,0), MaxH- draggableElement.clientWidth)
      
      // 更新元素位置
      draggableElement.style.left = dx + 'px';
      draggableElement.style.top = dy + 'px';
    }
  }

  function dragEnd() {
    isDragging = false;

    // 移除mousemove和mouseup事件监听器
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
  }

}

</script>

</html>

```