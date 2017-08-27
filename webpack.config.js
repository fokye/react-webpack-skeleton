const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const webpack = require('webpack');

const packageConfig = require('./package.json');
const modulesDirectory = path.resolve(__dirname, 'node_modules');
const sourceDirectory = path.resolve(__dirname, 'src');
const targetDirectory = __dirname;

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(sourceDirectory, 'index.js')
  ],
  output: {
    path: targetDirectory,
    filename: 'index.js'
  },
  plugins: [
    isProduction && new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true } },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  resolve: {
    alias: { _: sourceDirectory },
    modules: [modulesDirectory]
  }
};
