import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: 'TEST',
      icon: "book",
      prefix: "test/",
      children: "structure",
    },
    {
      text: 'Webpack5系列',
      icon: "book",
      prefix: "webpack5/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
