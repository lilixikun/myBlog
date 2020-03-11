
module.exports = {
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
}