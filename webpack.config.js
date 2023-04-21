const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports  = {
  mode: 'production',
  // entry point
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // output point (where to put the bundle)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // [name] is the entry point name [contenthash] is a hash of the content
    clean: true, // clean the dist folder before each build
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
