var nested = require('postcss-nested');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

module.exports = {
  entry: './router.js',
  output: {
    path: '../../dist/app',
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
      // webpack will process any css file that's imported in to the js file
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
