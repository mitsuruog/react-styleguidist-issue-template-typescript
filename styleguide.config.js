module.exports = {
  components: "src/components/**/*.{ts,tsx}",
  webpackConfig: require("./webpack.config"),
  // it is for making the Github pages.
  styleguideDir: "docs",
};