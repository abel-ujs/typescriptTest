var webpack = require('webpack');
var path = require("path");
module.exports = {
  entry: ['./src/main.js','./src/test.ts'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader!ts-jsx-loader'
      }
    ]
  }
};