const webpack = require('webpack');
const Uglify = webpack.optimize.UglifyJsPlugin;

module.exports = {
  context: __dirname + '/src',
  devtool: 'source-map',
  entry: './scripts.js',
  output: {
    path: __dirname + '/build',
    filename: 'js/scripts.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.(glsl|vs|fs)$/,
        loader: 'shader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ],
  },
  glsl: {
    chunkPath: __dirname + '/src/shaders'
  },
  plugins: [
    new Uglify({
      compress: {warnings: false}
    })
  ]
};
