const path = require('path');

module.exports = {
  mode: "development",
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.bundle.js',
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
};