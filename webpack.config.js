const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// TODO: remove source map before prod
module.exports = {
  devtool: "inline-source-map",
  context: path.join(__dirname, "src"),
  entry: {
    main: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
          { loader: "ts-loader" },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
  ],
  resolve: {
    aliasFields: ["browser"],
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.join(__dirname, "node_modules")],
    alias: {
      Source$: path.resolve(__dirname, "src/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      theme: path.resolve(__dirname, "./src/theme/"),
    },
  },
};
