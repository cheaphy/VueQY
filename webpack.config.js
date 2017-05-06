var webpack = require("webpack")
var path = require('path');


var WebpackMd5Hash = require('webpack-md5-hash');
var CleanPlulgin = require("clean-webpack-plugin");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/js/main.js',
  // 定义webpack输出的文件，我们在这里设置了
  // 让打包后生成的文件放在dist文件夹下的build.js文件中
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath:'/dist',
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      //转化ES6语法
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      //图片转化，小于8K自动转化为base64的编码
      {
        test: /\.(png|jpg|gif)$/,
        loader:'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    // new CleanPlulgin(["./dist"]),
    new webpack.LoaderOptionsPlugin({
        babel: {
          presets: ['es2015','stage-0'],
          plugins: ['transform-runtime']
        }
    }),
    new WebpackMd5Hash(),
    new HTMLWebpackPlugin({
      template: "./static/html/index.html",
      hash: true
    }) 
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}