var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    // For hot style updates
   'webpack/hot/dev-server',
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',
    './src/index'
  ],
  output: {
    path: buildPath,
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?!sass')
    }
  ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
