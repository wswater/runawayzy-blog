---
title: 关于本站
pageInfo: false
---

本站用Vuepress2静态生成，托管在Cloudflare pages上，用Git进行版本管理。更新博客的流程大概是：

1. 更新博文后push到github仓库
2. GitHub webhook发送post请求到Cloudflare pages的deploy hook
3. Cloudflare pages开始部署github仓库的vuepress代码
4. 发布到托管服务器

Vuepress主题是vuepress-theme-hope，评论插件使用Waline

## //TODO

- 更新博文
- 英文版