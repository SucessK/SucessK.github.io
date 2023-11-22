---
icon: 'article'
date: 2023-11-22
category:
  - 前端构建工具
tag:
  - webpack5
editLink: false
---

# Webpack 5 快速入门

Webpack是一个模块打包器，它可以将各种资源（例如JavaScript、CSS、图片等）打包成一个或多个bundle文件。Webpack 5是Webpack的最新版本，它带来了许多新的功能和改进。

## 快速入门

### 安装Webpack

要开始使用Webpack，首先需要安装Node.js和npm（或者使用yarn）。

通过以下命令安装最新版本的Webpack：

```bash
npm install webpack webpack-cli --save-dev
```

### 创建Webpack配置文件

在项目根目录下创建一个名为`webpack.config.js`的文件，并开始配置Webpack。

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',  // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),  // 输出路径
    filename: 'bundle.js'  // 输出文件名
  }
};
```

### 构建项目

在命令行中运行以下命令来构建项目：

```bash
npx webpack
```

Webpack将根据配置文件中的设置，打包并输出一个bundle文件到`dist`目录。

### 使用Webpack Dev Server

Webpack Dev Server是一个开发服务器，它提供了热更新和实时重载等功能。

首先，安装Webpack Dev Server：

```bash
npm install webpack-dev-server --save-dev
```

在`webpack.config.js`配置文件中添加以下配置：

```javascript
module.exports = {
  // ...
  devServer: {
    port: 3000,  // 端口号
    hot: true  // 启用热更新
  }
};
```

然后运行以下命令启动开发服务器：

```bash
npx webpack serve
```

现在，你可以在浏览器中访问`http://localhost:3000`来预览你的项目。

## 进阶知识

### 加载不同类型的文件

Webpack可以加载不同类型的文件，例如CSS、图片、字体等。为此，你需要安装相应的加载器。

例如，要加载CSS文件，你可以使用`style-loader`和`css-loader`。通过以下命令安装它们：

```bash
npm install style-loader css-loader --save-dev
```

然后在配置文件中添加以下规则：

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

现在，当Webpack遇到`.css`文件时，它将使用加载器来处理它们。

### 使用插件

插件可以进一步增强Webpack的功能。有许多可用的插件，你可以根据项目的需要选择合适的插件。

例如，`html-webpack-plugin`插件可以自动生成HTML文件，并将打包后的脚本自动注入到HTML中。

```bash
npm install html-webpack-plugin --save-dev
```

在配置文件中添加以下配置：

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
```

现在，当运行构建命令时，Webpack将自动生成一个HTML文件并将bundle脚本自动注入。

### 优化打包输出

Webpack还提供了许多优化选项，以减小打包输出的大小并优化性能。

例如，通过使用`terser-webpack-plugin`插件来压缩JavaScript代码：

```bash
npm install terser-webpack-plugin --save-dev
```

在配置文件中添加以下配置：

```javascript
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // ...
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
};
```

现在，构建输出的JavaScript代码将被压缩。

## 总结

这篇文档介绍了安装Webpack、配置Webpack、使用Webpack Dev Server、加载不同类型的文件、使用插件和优化打包输出等内容。

希望这篇文档能帮助你开始使用Webpack，并更好地理解和应用Webpack的功能和特性。


>webpack5中文指南：https://webpack.docschina.org/guides/