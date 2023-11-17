import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  "/webpack5/",
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
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
