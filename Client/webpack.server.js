const path = require('path');

module.exports = {
    target: 'node',
    entry: './server/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-react"]
                    }
                },
                exclude: /(node_modules|bower_components)/,
            },
        ]
    }
};