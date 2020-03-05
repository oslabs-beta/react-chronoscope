const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    contentScript: path.join(__dirname, './src/contentScript/contentScript.ts'), // path.resolve(__dirname, './src/index.tsx'),
    backgroundScript: path.join(__dirname, './src/backgroundScript/backgroundScript.ts'),
    devtools: path.join(__dirname, './src/devtools/devtools.ts'),
    bundle: path.join(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    publicPath: '/build/',
  },
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'React-ChronoScope',
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      filename: 'devtools.html',
      template: 'src/devtools/devtools.html',
      chunks: ['devtools'],
    }),
  ],
  devtool: 'source-map',
};
