const path = require('path')
    , webpack = require('webpack')  //同上省略
 //   , ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './index.js',  //输入
  output: {        //输出
    filename: 'apk.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        query: {
          presets:['react'],
        },
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,          //下方！和 的意思
         loader: 'style-loader!css-loader!stylus-loader',
        //  use: ExtractTexPlgin.extract({
        //     fallback: 'style-loader',
        //     use: ['css-loader','stylus-loader']
        // })
      },
      {
        test: /\.css$/,
         loader: "style-loader!css-loader"
        // use: ExtractTextPlugin.extract({
        //      use: 'css-loader'
        // })
      },
     {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader?limit=8192'
      },
    ]
  },
  plugins: [
      // new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}

