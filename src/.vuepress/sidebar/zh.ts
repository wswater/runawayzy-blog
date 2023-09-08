import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    
    {
      text: "关于营销",
      link: "/posts/marketing/",
      prefix: "/posts",
      children: [
        {
          text: "谷歌搜索实验室",
          prefix: "/posts/GoogleSearchLabs/",
          children: ["Signup","SGE"],
        },
        {
          text: "笔记",
          prefix: "/posts/thinking/",
          children: ["annual"]
        }
      ]
    },
    "intro",
    // "slides",
  ],
});
