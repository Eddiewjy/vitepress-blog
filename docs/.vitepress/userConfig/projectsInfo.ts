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
    banner: "/project-img/markdown.png", //暂时没有图片
    title: "IMarkdown",
    description: "基于原生TS自主设计解析器的Markdown编辑器,支持扩展语法",
    link: "https://github.com/Eddiewjy/md-parser",
    tag: "TypeScript",
  },
];
