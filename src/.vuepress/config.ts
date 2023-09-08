import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {

    "/": {
      lang: "zh-CN",
      title: "Runawayzy",
      description: "人所有的拖沓都是代表他并非真正热爱。",
    },

    
    // "/en/": {
    //   lang: "en-US",
    //   title: "Runawayzy",
    //   // description: "Here's the blog of Runawayzy.",
    // },
    
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  
});
