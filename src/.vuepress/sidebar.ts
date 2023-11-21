import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "actions",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "博文",
      icon: "folder",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: 'javascript文章',
      icon: "folder",
      prefix: "javascript/",
      children: "structure",
    },
    {
      text: '技术文档',
      icon: "folder",
      prefix: "doc/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
