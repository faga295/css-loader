const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("../../mini-css-extract-plugin/dist");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  // output: {
  //     publicPath: '/assets/'
  // },
  target: "web",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [
        // {
        //     loader: MiniCssExtractPlugin.loader,
        // },
        // {
        oneOf: [
          {
            assert: { type: "css" },
            loader: path.resolve(__dirname, "../dist/index.js"),
            options: {
              exportType: "css-style-sheet",
              modules: true,
            },
          },
        ],
        // },
        // ]
      },
      // {
      //     test: /\.css$/,
      // },
      {
        test: /\.png$/,
        use: ["file-loader"],
      },
    ],
  },
};
