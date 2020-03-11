const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const serverConfig = {
    target: 'node',
    entry: './server/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js'
    },
};

module.exports = merge(baseConfig, serverConfig)