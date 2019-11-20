module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/portfolio-vue/'
  : '/',
  // publicPath: "./",
  // assetsDir: "",
  outputDir: "docs",
  filenameHashing: false,
  productionSourceMap: false,
}