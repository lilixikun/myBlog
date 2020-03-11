const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const clienConfig = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
}

module.exports = merge(clienConfig, baseConfig)