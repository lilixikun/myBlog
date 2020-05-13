const path = require('path');
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base')

const serverConfig = {
    target: 'node',
    entry: path.resolve('./src/server/index.js'),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "isomorphic-style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        paths: [
                            path.resolve(__dirname, "node_modules")
                        ]
                    }
                }]
            }
        ]
    },
    // 避免把 node_Modules 打包进去
    externals: [nodeExternals()]
};

module.exports = merge(baseConfig, serverConfig)