var nested = require('postcss-nested');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './testLoader.js',
  output: {
    path: '../dist/test',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: ['babel'],
      query: {
        presets: ['es2015', 'react'],
      },
    },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!cssnext-loader',
      },
    ],
  },
  postcss: [
    nested,
    cssnext,
    autoprefixer,
    csswring,
  ],

};
