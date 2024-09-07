const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "output"),
    // membuat nama file unik setiap melakukan bundle
    filename: "bundle.[contenthash].js",
    // membersihkan file bundle yang lama
    clean: true,
  },
});
