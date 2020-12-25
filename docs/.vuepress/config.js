module.exports = {
  title: "TS-Router",
  description: "Just playing around",
  themeConfig: {

    nav: [
      {
        // 导航栏
        text: "Home",
        link: "/",
      },
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "External",
        link: "https://google.com",
      },
    ],
    sidebar: [
      "/guide/",
      
        {
          title: '向导',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            '/guide/',
            "/guide/start.md"
          ]
        },
      
    ],

  },
};
