const path = require('path');

module.exports = {
  // TODO: change the path
  entry: {
    contentscript: path.join(__dirname, './src/contentscript/contentscript.ts'), // path.resolve(__dirname, './src/index.tsx'),
    backgroundscript: path.join(__dirname, './src/background/backgroundscript.ts'),
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
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'], // do we have to add styling? .scss / .css
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' },
      },
      // addition - add source-map support
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
        test: /\.(s*)(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  // addition - add source-map support
  devtool: 'source-map',
};
