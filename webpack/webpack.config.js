var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      path.join(__dirname,'../src/main.js'),    //入口可以弄成多入口：http://webpack.github.io/docs/configuration.html
    ]
  },
  output: {
        path: path.resolve(__dirname, '../public'), // 输出文件的保存路径
        filename: 'bundle.js' // 输出文件的名称
    },

  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      loaders: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.js?$/,
      loaders: ['react-hot'],
      include: [path.join(__dirname, 'app/src')]
    }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [precss, autoprefixer];
        },
        devServer: {
            historyApiFallback:true,
            hot:true,
            inline:true,
            progress:true
        }
      }
    })
  ]

};