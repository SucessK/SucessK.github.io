import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "wang's blog",
  description: "vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
