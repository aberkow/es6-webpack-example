const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './js/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader", options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }
        ]
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         sourceMaps: true
        //       }
        //     },
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //         sourceMaps: true
        //       }
        //     }
        //   ]
        // })
        
      }
    ]
  },
  // plugins: [
  //   new ExtractTextPlugin('style.css')
  // ]
}