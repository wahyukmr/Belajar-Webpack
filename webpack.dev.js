const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
    // membersihkan file bundle yang lama
    clean: true,
  },
  watch: true,
});
