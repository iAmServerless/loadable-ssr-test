const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: "http://localhost:8080/",
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },
  plugins: [new LoadablePlugin()],
};