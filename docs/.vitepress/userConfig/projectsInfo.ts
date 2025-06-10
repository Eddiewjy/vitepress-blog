interface Project {
  banner: string // 图片链接
  title: string // 项目标题
  description: string // 项目简介
  link: string // 项目链接
  tag?: string // 项目标签
}

/**
 * TODO: 缺项处理
 * 加上图片
 */
export const projectsInfo: Project[] = [
  {
    banner: "/project-img/mundo.png", //暂时没有图片
    title: "mundo论坛",
    description: "类掘金式的论坛网站，前后台分离",
    link: "https://mundo.trancecho.top",
    tag: "React"
  },
  {
    banner: "/project-img/markdown.png",
    title: "IMarkdown",
    description: "自主设计解析器的Markdown编辑器,支持插件扩展",
    link: "https://github.com/Eddiewjy/md-parser",
    tag: "TypeScript"
  },
  {
    banner: "/project-img/portfolio.png", //
    title: "portfolio个人作品集",
    description: "自学React的+ TypeScript  + TailwindCSS的demo",
    link: "https://github.com/Eddiewjy/portfolio",
    tag: "React"
  },
  {
    banner: "/project-img/acme.png", //
    title: "ACME",
    description: "基于Next的完整Web应用,基本涵盖Nextjs的所有特性",
    link: "https://github.com/Eddiewjy/demo-nextjs-dashboard",
    tag: "Nextjs"
  },
  {
    banner: "/project-img/time-traveler.png", //
    title: "时光旅者",
    description: "基于uniapp+vue的小程序，支持地图导航+AR",
    link: "https://github.com/trancecho/time-traveler-fr/tree/dev",
    tag: "Vue"
  }
]
