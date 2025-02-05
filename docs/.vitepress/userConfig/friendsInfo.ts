interface Friend {
  avatar: string; // 头像链接
  name: string; // 用户 id
  link: string; // 博客链接
  title?: string; // 用户头衔
  tag?: string; // 用户标签
  color?: string; // 标签颜色
}

/**
 * TODO: 缺项处理
 * 在此处填写你的友情链接
 */
export const friendsInfo: Friend[] = [
  // {
  //   avatar: "https://avatars.githubusercontent.com/u/108183563?v=4",
  //   name: "ZzzRemake",
  //   title: "🚀 全能 🐳",
  //   link: "https://zzzremake.github.io/",
  //   tag: "Research Associate",
  //   color: "indigo",
  // },
  // {
  //   avatar: "https://avatars.githubusercontent.com/u/29620619?v=4",
  //   name: "Yaossg",
  //   title: "强大的计算机科学家🧐",
  //   link: "https://Yaossg.com",
  //   tag: "DevOps",
  //   color: "pink",
  // },
  {
    avatar: "https://avatars.githubusercontent.com/u/129849919?v=4",
    name: "yukki",
    title: "🚀 全能学长 ",
    link: "https://cjliblog.top/",
    tag: "Backend/FullStack",
    color: "indigo",
  },
];
