const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    "whatwg-fetch",
    "webpack-dev-server/client?http://localhost:8081",
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, "src/index.js")
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-redux-quiz.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};