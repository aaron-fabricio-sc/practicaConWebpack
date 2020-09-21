const path = require("path");

const webpack = require("webpack");

module.exports = {
  entry: {
    modules: ["react", "react-dom"],
  },
  mode: "production",

  output: {
    path: path.resolve(__dirname, "dist", "js"),
    filename: "[name].js",
    library: "[name]",
  },
  // devServer: {
  //   open: true,
  //   hot: true,
  // },

  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json"),
    }),
  ],
};
