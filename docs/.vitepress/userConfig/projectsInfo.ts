interface Project {
  banner: string; // 图片链接
  title: string; // 项目标题
  description: string; // 项目简介
  link: string; // 项目链接
  tag?: string; // 项目标签
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
    link: "https://github.com/trancecho/mundo-fe",
    tag: "React",
  },
  {
    banner: "/project-img/markdown.png", //
    title: "IMarkdown",
    description: "基于原生TS自主设计解析器的Markdown编辑器,支持扩展语法",
    link: "https://github.com/Eddiewjy/md-parser",
    tag: "TypeScript",
  },
  {
    banner: "/project-img/portfolio.png", //
    title: "portfolio个人作品集",
    description: "炫技个人作品集，使用了很多fancy的ui库，还可以发邮件",
    link: "https://github.com/Eddiewjy/portfolio",
    tag: "React",
  },
  {
    banner: "/project-img/acme.png", //
    title: "ACME",
    description: "基于NextJS的完整Web应用,基本涵盖NextJS的所有特性",
    link: "https://github.com/Eddiewjy/demo-nextjs-dashboard",
    tag: "NextJS",
  },
];
