const path = require("path");
// const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src", "js", "index.js"),
  },
  mode: "production",

  output: {
    path: path.resolve(__dirname, "dist", "js"),
    filename: "[name].js",
  },
  devServer: {
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: "Plugins",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    // new MiniCSSExtractPlugin({
    //   filename: "css/[name].css",
    // }),
  ],
};
