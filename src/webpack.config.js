module.exports = {
  entry: './index.js',
  output: {
    path: '../dist/app',
    filename: 'bundle.js',
  },
  module: {
  loaders: [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: ['babel'],
    query: {
      presets: [ 'react','es2015'],
    },
  },],
},
};
