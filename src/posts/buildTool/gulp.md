---
icon: 'article'
date: 2023-11-20
category:
  - 前端构建工具
tag:
  - Gulp
editLink: false
---

# Gulp.js

::: info 引言
Gulp是一个基于Node.js的自动化构建工具，它使用简单的代码优于配置的策略，让开发过程更加简单和高效。Gulp使用可扩展的插件系统，能完成的任务包括：合并，压缩，测试，以及其他的构建任务。

:::

## Gulp的特性

1. 使用方便：Gulp让简单的任务简单，复杂的任务更可管理。它通过代码优于配置的策略，让你可以用更少的代码来完成更多的任务。同时，它的插件系统也使得任务的扩展变得简单。
2. 构建快速：Gulp通过流式操作，减少频繁的IO操作，可以更快地构建项目。相比于Grunt等其他构建工具，Gulp的流操作在处理大型项目时能节省大量的时间。
3. 插件高质：Gulp有严格的插件指导策略，确保插件能简单高质的工作。这使得开发者在选择插件时可以更加放心，不必担心插件的质量问题。
4. 易于学习：Gulp只有少量的API，掌握它非常容易。即使是没有接触过构建工具的新手，也可以快速上手。

## 如何使用Gulp

1. 环境： Node.js和npm
2. 全局安装gulp-cli `npm i -g gulp-cli` 
3. 项目安装必要依赖`npm i -D gulp`
4. 目录添加`gulpfile.js`文件

## 插件介绍

- gulp: Gulp 是一个基于流的构建系统，用于自动化任务的构建。它可以帮助我们定义和执行各种任务，如文件复制、压缩、合并等。

- gulp-autoprefixer: 这个插件用于自动添加 CSS 前缀，以确保样式在不同浏览器中的兼容性。

- gulp-uglify: 这个插件用于压缩 JavaScript 代码，减小文件大小，提高加载速度。

- gulp-clean-css: 这个插件用于压缩 CSS 代码，去除不必要的空格和注释，减小文件大小。

- gulp-rev: 这个插件用于给静态资源文件（如 CSS、JavaScript、图片等）添加哈希值，以解决缓存问题。

- del: 这个插件用于删除文件或文件夹（删除上次打包结果）。

- gulp-javascript-obfuscator: 这个插件用于混淆 JavaScript 代码，增加代码的安全性，使其难以被逆向工程。

- gulp-htmlmin: 这个插件用于压缩 HTML 代码，去除不必要的空格、注释和换行符，减小文件大小。

- gulp-rev-collector: 这个插件用于替换 HTML 文件中的静态资源引用路径，以匹配经过哈希处理后的文件名。

## 插件使用

1. 处理html
```js
function revHtml() {
  const options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    babel: true,
    minifyCSS: true//压缩页面CSS
  };
  return src(['./code/**/*.html', '!./code/assets/**/*'], { base: 'code' }) 
  //code存放代码文件，表示将./code目录作为基准路径，打包后dist将具有相同目录结构

    .pipe(htmlmin(options))
    .pipe(dest('./dist'))
}
```
2. 建立处理个别无需更改的文件ico

```js
function ico() {
  return src('./code/favicon.ico', { allowEmpty: true })
    .pipe(dest('./dist'))
}

```
3. 处理css
```js
function taskCss() {
  return src('./code/assets/css/**/*.css', { base: 'code' })
    .pipe(autoprefix({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rev())
    .pipe(dest('./dist'))
    .pipe(rev.manifest('rev-css-manifest.json'))
    .pipe(dest('./dist/json'));
}

```
4. 处理图片
```js
function images() {
  return src(['./code/assets/images/**/*.png',
    './code/assets/images/**/*.ico'], { allowEmpty: true, base: 'code' })
    .pipe(dest('./dist'))
}
```
5. 压缩js
```js
function uglifyJs() {
  return src('./code/assets/js/**/*.js', { base: 'code' })
    .pipe(rev())//添加MD5文件后缀
    .pipe(obfuscator({
      compact: true, // 启用紧凑模式
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1, // 控制流平铺阈值
      deadCodeInjection: true, // 启用死代码注入
      deadCodeInjectionThreshold: 1, // 死代码注入阈值
      identifierNamesGenerator: 'hexadecimal', // 生成标识符名称的方法
      rotateStringArray: true, // 启用字符串数组旋转
      stringArray: true, // 启用字符串数组混淆
      stringArrayEncoding: ['base64'], // 字符串数组编码
    }))
    .pipe(dest('./dist'))//保存文件
    .pipe(rev.manifest('rev-js-manifest.json'))//生成原始文件名与添加MD5文件名的json对象文件
    .pipe(dest('./dist/json'));//将json文件名保存至build/json文件夹下
}
```
6. fonts、依赖包无需打包
```js
function fonts() {
  return src(['./code/assets/fonts/**/*'], { allowEmpty: true })
    .pipe(dest('./dist/assets/fonts'));
}
function vendors() {
  return src(['./code/assets/vendor/**/*'], { allowEmpty: true })
    .pipe(dest('./dist/assets/vendor'));
}
```
7. 建立css内处理图片名称任务|js内处理文件名称任务

```js
// 将被hash处理后的js 根据json文件对应路径
async function revjs() {
  return src(['./dist/json/rev-js-manifest.json', './dist/assets/js/**/*.js'], { base: 'code', allowEmpty: true })
    .pipe(revCollector({
      replaceReved: true,
    }))
    .pipe(dest('./dist'));
}

```

8. 使用rev替换成md5文件名，这里包括html和css的资源文件也一起

```js
task('rev', async function () {
  //html，针对js,css,img
  return src(['./dist/json/**/*.json', './dist/**/*.html'], { allowEmpty: true, base: 'code' })
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(dest('./dist'));
});

task('processJS', async function () {
  //js，针对所有文件名
  return src(['./dist/json/**/*.json', './dist/assets/js/**/*.js'], { allowEmpty: true, base: 'code' })
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(dest('./dist'));
});

```

9. 构建任务

```js

//dist文件处理
task('build', parallel('rev', 'processJS'), async function () { })

// 初始化
task('init', series(taskDel, parallel(revHtml, ico, taskCss, images, fonts, vendors, uglifyJs), revimg, revjs, async function () {

}))

task('default', series('init','build'))

```
## 运行

在目录cmd下输入`gulp`执行默认任务。

## 完整js

```js
const { task, src, dest, series, parallel } = require('gulp')
const autoprefix = require('gulp-autoprefixer');//兼容处理
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rev = require('gulp-rev')
const del = require('del')
const obfuscator = require('gulp-javascript-obfuscator'); //混淆js
const htmlmin = require('gulp-htmlmin'); //压缩html里面的js，css，去除空格
const revCollector = require('gulp-rev-collector')
function taskDel() {
  return del(['dist'])
}

// 处理html
function revHtml() {
  const options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    babel: true,
    minifyCSS: true//压缩页面CSS
  };
  return src(['./code/**/*.html', '!./code/assets/**/*'], { base: 'code' })
    .pipe(htmlmin(options))
    .pipe(dest('./dist'))
}

// 建立处理个别无需更改的文件ico
function ico() {
  return src('./code/favicon.ico', { allowEmpty: true })
    .pipe(dest('./dist'))
}

// 处理css
function taskCss() {
  return src('./code/assets/css/**/*.css', { base: 'code' })
    .pipe(autoprefix({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rev())
    .pipe(dest('./dist'))
    .pipe(rev.manifest('rev-css-manifest.json'))
    .pipe(dest('./dist/json'));
}

// 处理图片
function images() {
  return src(['./code/assets/images/**/*.png',
    './code/assets/images/**/*.ico'], { allowEmpty: true, base: 'code' })
    // .pipe(rev())//添加MD5文件后缀
    .pipe(dest('./dist'))
    // .pipe(rev.manifest('rev-images-manifest.json'))//生成原始文件名与添加MD5文件名的json对象文件
    // .pipe(dest('./dist/json'));//将json文件名保存至build/json文件夹下
}

// 压缩js
function uglifyJs() {
  return src('./code/assets/js/**/*.js', { base: 'code' })
    .pipe(rev())//添加MD5文件后缀
    .pipe(obfuscator({
      compact: true, // 启用紧凑模式
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1, // 控制流平铺阈值
      deadCodeInjection: true, // 启用死代码注入
      deadCodeInjectionThreshold: 1, // 死代码注入阈值
      identifierNamesGenerator: 'hexadecimal', // 生成标识符名称的方法
      rotateStringArray: true, // 启用字符串数组旋转
      stringArray: true, // 启用字符串数组混淆
      stringArrayEncoding: ['base64'], // 字符串数组编码
    }))
    .pipe(dest('./dist'))//保存文件
    .pipe(rev.manifest('rev-js-manifest.json'))//生成原始文件名与添加MD5文件名的json对象文件
    .pipe(dest('./dist/json'));//将json文件名保存至build/json文件夹下
}


function fonts() {
  return src(['./code/assets/fonts/**/*'], { allowEmpty: true })
    .pipe(dest('./dist/assets/fonts'));
}
function vendors() {
  return src(['./code/assets/vendor/**/*'], { allowEmpty: true })
    .pipe(dest('./dist/assets/vendor'));
}


// 建立css内处理图片名称任务|js内处理文件名称任务
async function revimg() {
  src(['./dist/json/rev-images-manifest.json', './dist/assets/css/**/*.css'], { base: 'code', allowEmpty: true })
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(dest('./dist'));
}
async function revjs() {
  //css，主要是针对img替换
  return src(['./dist/json/rev-js-manifest.json', './dist/assets/js/**/*.js'], { base: 'code', allowEmpty: true })
    .pipe(revCollector({
      replaceReved: true,
    }))
    .pipe(dest('./dist'));
}


//使用rev替换成md5文件名，这里包括html和css的资源文件也一起
task('rev', async function () {
  //html，针对js,css,img
  return src(['./dist/json/**/*.json', './dist/**/*.html'], { allowEmpty: true, base: 'code' })
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(dest('./dist'));
});

task('processJS', async function () {
  //js，针对所有文件名
  return src(['./dist/json/**/*.json', './dist/assets/js/**/*.js'], { allowEmpty: true, base: 'code' })
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(dest('./dist'));
});



//dist文件处理
task('build', parallel('rev', 'processJS'), async function () { })

// 初始化
task('init', series(taskDel, parallel(revHtml, ico, taskCss, images, fonts, vendors, uglifyJs), revimg, revjs, async function () {

}))

task('default', series('init','build'))

```