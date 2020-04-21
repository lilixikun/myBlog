const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const clienConfig = {
    entry: './src/client/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true
                        //localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        paths: [
                            path.resolve(__dirname, "node_modules")
                        ]
                    }
                }]
            }
        ]
    }
}

module.exports = merge(clienConfig, baseConfig)