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
  // devServer: {
  //   open: true,
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|web$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 90000,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: "Holasasaa",
      minify: {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: path.resolve(__dirname, "index.html"),
    }),
    // new MiniCSSExtractPlugin({
    //   filename: "css/[name].css",
    // }),
  ],
};
