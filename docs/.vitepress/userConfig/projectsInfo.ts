interface Project {
  banner: string; // 图片链接
  title: string; // 项目标题
  description: string; // 项目简介
  link: string; // 项目链接
  tag?: string; // 项目标签
}

/**
 * TODO: 缺项处理
 * 在此处填写你的项目介绍
 */
export const projectsInfo: Project[] = [
  {
    banner: "/project-img/dinosaur.png",
    title: "Feishu&ChatGPT",
    description:
      "mundu校园论坛(类掘金)",
    link: "https://github.com/trancecho/mundo-fe",
    tag: "React",
  },
  {
    banner: "/project-img/dinosaur.png",
    title: "CloudMusic",
    description: "对移动端网易云音乐的模仿与复现，实现了虚拟列表与无限滚动...",
    link: "https://github.com/ZbWeR/NeteaseCloudMusic",
    tag: "Vue",
  }
  
];
