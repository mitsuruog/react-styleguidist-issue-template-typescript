module.exports = {
  components: "src/components/**/*.{ts,tsx}",
  webpackConfig: require("./webpack.config"),
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    savePropValueAsString: true
  }).parse,
  // it is for making the Github pages.
  styleguideDir: "docs",
};