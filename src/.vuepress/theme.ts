import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://runawayzy.com",

  author: {
    name: "runawayzy",
    url: "https://runawayzy.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  darkmode: "toggle",

  blog: {
    medias: {
      Email: "mailto:waterbro119@gmail.com"
    },
  },

  // pageInfo: false,
  editLink: false,
  nextLink: false,
  breadcrumb: false,

  locales: {

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "就酱",

      displayFooter: true,

      blog: {
        description: "你好陌生人",
        intro: "/intro.html",
      },

    },


    // "/": {
    //   // navbar
    //   navbar: zhNavbar,

    //   // sidebar
    //   sidebar: zhNavbar,

    //   footer: "That's all",

    //   displayFooter: true,

    //   blog: {
    //     description: "I'm nobody",
    //     intro: "/intro.html",
    //   },

    // },

    
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      // "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://runawayzy-blog-comments-jgt859zhy-wswater.vercel.app/",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
