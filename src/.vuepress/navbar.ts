import { navbar } from "vuepress-theme-hope";
import fs from 'fs';
import path from 'path';
function getDynamicChildren(folderPath: fs.PathLike) {
  const files = fs.readdirSync(folderPath); // 读取文件夹中的所有文件
  const children = files
    .filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md') // 过滤出以.md结尾但不是readme.md的文件
    .map(file => path.parse(file).name)
    ; // 获取文件名（不包括扩展名）作为children

  return children;
}
const folderPath = path.join(__dirname,'../javascript');  // 填写所需文件夹的路径

export default navbar([
  "/",
  "/demo/",
  {
    text: "Javascript文章",
    icon: "module",
    prefix: "/javascript/",
    children: getDynamicChildren(folderPath)
    // children: [
    //   "1",
    //   "2"
    // ],
  },
  {
    text: "博文",
    icon: "blog",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "app",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          "2",
        ],
      },
      "jstabs",
      "gulp"
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
