import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Marketing",
      icon: "book",
      prefix: "posts/marketing/",
      children: "structure",
    },
    
    "intro",
    // "slides",
  ],
});
