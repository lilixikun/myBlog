
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-react"]
                    }
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}