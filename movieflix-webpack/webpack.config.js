const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, './src/app/index.js'),
    details: path.resolve(__dirname, './src/app/movie-detail.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    compress: true,
    open: true,
    hot: false,
    // liveReload: false,
    historyApiFallback: {
      index: '/movies.html',
    },
  },
  module: {
    rules: [
      {
        // test: /\.scss$/,
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', //3. laddas css in i DOM
          'css-loader', //2. placeras css filen/filerna i html dokumentet
          'sass-loader', //1. kompileras scss till css
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'movies.html',
      template: './src/app/movies.html',
      inject: true,
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'movie-details.html',
      template: './src/app/movie-details.html',
      inject: true,
      chunks: ['details'],
    }),
  ],
};
