export default defineAppConfig({
  pages: ["pages/tabbar1/index", "pages/tabbar2/index", "pages/tabbar3/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/tabbar1/index",
        text: "1",
      },
      {
        pagePath: "pages/tabbar2/index",
        text: "2",
      },
      {
        pagePath: "pages/tabbar3/index",
        text: "3",
      },
    ],
  },
  subPackages: [
    {
      root: "pages2",
      pages: ["home/index"],
    },
  ],
});
