const { resolve } = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    index: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates


        './index.js'
        // the entry point of our app    
        ]
  },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
            // necessary for HMR to know where to load the hot update chunks
    },
    context: resolve(__dirname, 'src'),
devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/',
        // match the output `publicPath`

        //fallback to root for other urls
        historyApiFallback: true
    },
  module: {
    loaders: [
    {
      test: /\.(js|jsx)$/,
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
    test: /\.less/,
    loader: 'style-loader!css-loader!less-loader'
  },
  {
    test:/\.(png|jpg)$/, loader: "url-loader?limit=8192"
},
    {
      test: /\.js?$/,
      loaders: ['react-hot'],
      include: [resolve(__dirname, 'app/src')]
    }
    ]
  },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
};