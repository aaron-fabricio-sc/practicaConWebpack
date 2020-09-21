const path = require("path");
const MiniCss = require("mini-css-extract-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src", "js", "index.js"),
    contacto: path.resolve(__dirname, "src", "js", "contacto.js"),
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
        use: [
          {
            loader: MiniCss.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCss.loader,
          },
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCss.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCss.loader,
          },
          "css-loader",
          "style-loader",
        ],
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new MiniCss({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
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
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json"),
    }),
    // new MiniCSSExtractPlugin({
    //   filename: "css/[name].css",
    // }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      name: "commons",
    },
  },
};
