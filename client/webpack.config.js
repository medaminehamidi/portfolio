const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/templates/index.html',
  chunks: ['vendors', 'app'],
  filename: './index.html'
})

const {
  srcPath,
  distPath
} = require('./webpack/config')

const dotenv = new Dotenv({
  systemvars: true
})

module.exports = env => {
  return {
    entry: {
      app: ['@babel/polyfill', 'whatwg-fetch', srcPath]
    },
    output: {
      filename: '[name].[hash].js',
      path: distPath,
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(jpg|png|gif|svg|pdf|ico|woff|eot|woff2|ttf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
              context: 'src'
            }
          }
        }
      ]
    },
    plugins: [
      htmlPlugin,
      dotenv
    ],
    devServer: {
      contentBase: distPath,
      historyApiFallback: true,
      port: 7070,
      proxy: {
        '/api': 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      }
    }
  }
}
