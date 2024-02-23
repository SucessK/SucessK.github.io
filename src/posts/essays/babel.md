---
icon: article
category:
  - 前端技术随笔
tag:
  - JS
  - Babel

editLink: false
---

# Babel工具

::: info 引言
Babel是一个工具链，主要用于将采用ECMAScript 2015+语法编写的代码转换为向后兼容的 JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
:::


## 结构

```javascript
// babel.config.js
module.exports = {
    ...,
    envName: "development",
    plugins: [],
    presets: [],
    passPerPreset: false,
    targets: {},
    browserslistConfigFile: true,
    browserslistEnv: undefined,
    inputSourceMap: true
    ...
}
```
一般主要用到的就是`plugins`、`presets`这两个

## 功能
`Babel`提供以下两个功能组成：
- 编译`ES6+`最新语法（`let`、`class`、`() => {}`等）
- 实现旧版本浏览器不支持的`ES6+`的API（`Promise`、`Symbol`、`Array.prototype.includes`等）

## @babel/core

它是`Babel`实现编译的核心。所以我们如果要使用Babel，`@babel/core`这个包一定是必不可少的。另外我们平常说的`Babel 6`、`Babel 7`指的就是@babele/core的版本

## @babel/cli

> 官网解释：`Babel`自带了一个内置的`CLI`命令行工具，可通过命令行编译文件

```
npm install --save-dev @babel/core @babel/cli


npx babel index.js
```

## @babel/preset-env

> 官网解释：`@babel/preset-env`是一个智能预设，它允许您使用最新的JavaScript，而无需微观管理目标环境需要哪些语法转换（以及可选的浏览器`polyfill`）。这既让你的生活更轻松，也让JavaScript包更小！


`@babel/preset-env`：

- `preset`预设
- `env`环境

### preset

Babel编译`ES6+`语法，是通过一个个插件`plugin`去实现的。每年都会有不同新的提案、新的语法，但我们不可能一个个插件去配置，所以就有了`preset`这个东西。因此我们可以理解成`preset`就是一个语法插件集合包，这样我们只用安装这一个包，不需要一个个配插件，就可以很方便的编译最新的语法了。

`npm i @babel/preset-env -D`

```js
// 修改babel.config.js
const presets = [
    '@babel/preset-env'
];

module.exports = {presets};
```

### env
env指的是环境。因为`@babel/preset-env`还有一个配置功能，我们可以通过配置我们代码运行的目标环境，来控制`polyfill`（一个提供低版本浏览器缺失的`ES6+`新特性的方法与实现的集合 ，后面会有更详细的讲解）的导入跟语法编译，从而使`ES6+`新的特性可以在我们想要的目标环境中顺利运行。

**总结**

- 它只编译`ES6+`语法
- 它并不提供`polyfill`，但是可以通过配置我们代码运行的目标环境，从而控制`polyfill`的导入跟语法编译，使`ES6+`的新特性可以在我们想要的目标环境中顺利运行

## polyfill

### 功能
`ES6+`除了提供很多简洁的语法（`let、class、() => {}`等）外，还为我们提供了很多便捷的API（`Promise、Symbol、Array.prototype.includes`等）。但旧版本浏览器是不支持这些API的，而`polyfill`存放了这些API的方法与实现，所以它可以使得这些不支持的浏览器，支持这些API。
理解
我们可以把所有这种存放了`ES6+ API`的方法与实现的集合叫做`polyfill`，也就是我们经常说的`垫片`。（如果把我们的旧版本浏览器缺失的API当做一个个坑，`polyfill`就是用来把这些坑填平）
`polyfill`也分很多种，像core-js是会提供旧版本浏览器缺失的所有的API；还有一些只提供缺失API的某块，例如 `promise-polyfill`、`proxy-polyfill` 等。
`Babel`配置`polyfill`的过程，就是实现旧版本浏览器对这些API支持的过程。

## @babel/polyfill

> 从`Babel 7.4.0`开始，这个包已经被弃用，转而直接包含`core-js/stable`（用于polyfill ECMAScript功能）
```
import "core-js/stable";
```

这个包由`core-js`（版本为`2.x.x`）与`regenerator-runtime`两个包组成
这个包在`Babel 7.4.0`以后就废弃了，所以在`Babel 7.4.0`以后，我们想让一些不支持`ES6+` API的旧版本浏览器支持这些`API`，应该直接安装`core-js@3.x.x`的包（不要安装`2.x.x`的版本，已经不维护了，目前最新版本为`3.x.x`；并且只有`3.x.x`的版本才有`stable`这个文件夹）

## core-js

**概述**

通过上面`polyfill`、`@babel/polyfill`两个模块，我们可以知道它是一个垫片，它会提供旧版本浏览器缺失的所有的API，如果我们想要在旧浏览器用到`ES6+` API时，我们直接安装`core-js@3.x.x`这个包。


通过 官方的介绍，我们可以知道：
```javascript
import '@babel/polyfill';
```
等同于
```javascript
// core-js必须是3.x.x版本，因为2.x.x版本，不包含stable文件夹
import "core-js/stable";
import "regenerator-runtime/runtime";
```

Babel >= 7.18.0等同于
```javascript
// core-js必须是3.x.x版本，因为2.x.x版本，不包含stable文件夹
// Babel >= 7.18.0后 不需要再 import "regenerator-runtime/runtime";
import "core-js/stable";
```
如果我们要把`async function() {}`等异步函数，或者`fuction* myGenerator() {}`这种`Generator`函数编译成`ES5`，并且`@babel/core`或`@babel/plugin-transform-regenerator`小于`7.18.0`，我们就需要手动`import "regenerator-runtime/runtime"`这个包。


在`Babel >= 7.18.0`以后，我们直接`import "core-js/stable"`;

## @babel/runtime
> 官方解释：`@babel/runtime`是一个包含`Babel`模块化运行时助手的库

在Babel编译的时候，会有一些辅助函数，这些函数就是`ES6+`一些语法糖的实现

它是Babel编译后的代码。我们会发现，编译以后生成很多函数，并且会以`内联`的方式插入到我们的代码中，这些函数就是我们说的`辅助函数`。它是`@babel/runtime`的内容，它在`node_modules/@babel/runtime/helpers`。
我们最后来看看白色框，会发现Babel编译后的辅助函数，都可以在`@babel/runtime`里面找到。
所以`@babel/runtime`是存放了Babel辅助函数的一个集合包。


## @babel/plugin-transform-runtime

> 官方解释：一个插件，可以重用`Babel`注入的帮助程序代码以节省代码大小

通过上面`@babel/runtime`模块的了解，我们知道当我们使用了一些`ES6+`的语法糖时，Babel会生成一些辅助函数来编译这些语法糖，并以内联的方式插入到代码中。
那如果我们有10个文件都用到了语法糖，那这些辅助函数，是不是会生成10次，并内联插入10次呢？我们用这个案例 `no-use-transform-runtime` 来感受一下。
我们定义了三个文件，每个文件都用了`class`这个语法糖。

```js
// babel.config.js 配置文件
const presets = [
    '@babel/preset-env'
];
module.exports = {presets};

// Animal.js 文件
export default class Animal {
    constructor() {}
};

// Country.js 文件
export default class Country {
    constructor() {}
};

// index.js 文件
import Animal from "./class/Animal";
import Country from "./class/Country";

class People {
    constructor() {
    }
};

const lMC = new People();
const cat = new Animal();
const usa = new Country();

```
看看红色的框框，我们会发现实现的方法都是一样的，所以在每个使用到`class`语法糖的文件中，辅助函数都被生成并插入了一次，这些基本重复的代码，无疑是会大大增加我们的打包体积的。

为了解决上述的弊端，我们就得使用`@babel/plugin-transform-runtime`插件。从`@babel/runtime`模块我们知道，它里面存放了Babel辅助函数的集合，`@babel/plugin-transform-runtime`会将我们用到的辅助函数，从`@babel/runtime`中以`require`或者`import`的方式，引入到我们的文件中，实现复用，从而减小我们最终输出包的体积。
所以`@babel/runtime`跟`@babel/plugin-transform-runtime`两者通常是配合一起使用。

```js
// babel.config.js 配置文件
// 增加了@babel/plugin-transform-runtime 配置
const plugins = [
    '@babel/plugin-transform-runtime'
]
const presets = [
    '@babel/preset-env'
];
module.exports = {plugins, presets};

// Animal.js 文件
export default class Animal {
    constructor() {}
};

// Country.js 文件
export default class Country {
    constructor() {}
};

// index.js 文件
import Animal from "./class/Animal";
import Country from "./class/Country";

class People {
    constructor() {
    }
};

const lMC = new People();
const cat = new Animal();
const usa = new Country();

```

我们会发现：

- 辅助函数会以require引用的方式加到我们的代码中
- 打包后，辅助函数只用了一次，而且不是插入三次，很好的实现了复用
- 打包出来的体积也变成了3KB，很好的缩小了最后包的体积