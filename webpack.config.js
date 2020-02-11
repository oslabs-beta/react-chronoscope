const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './client/bundle.js'),
    devServer: {
        // contentBase: path.resolve(__dirname, 'build'),
        // compress: true,
        publicPath: '/build/',
        proxy: {
            '/': 'http://localhost:3000'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(s*)(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    }
};