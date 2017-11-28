var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8082,
        contentBase: './build'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: '/node_modules'
            },
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(eot|svg|woff|woff2|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
}