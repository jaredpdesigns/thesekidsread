module.exports = {
  assetsDir: "assets",
  outputDir: "docs",
  pwa: {
    name: "These Kids Read",
    themeColor: "#00C2B2",
    msTileColor: "#00C2B2",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black translucent"
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/variables.scss";`
      }
    }
  }
};
