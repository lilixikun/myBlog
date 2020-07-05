const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PurgecssPlugin = require('purgecss-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require("glob")
const path = require('path')

const PATHS = {
    src: path.join(__dirname, './src')
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: {
                    loader: 'babel-loader',
                    options: {
                        "cacheDirectory": true,
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
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: 4, // 开启几个进程来处理压缩，默认是 os.cpus().length - 1
            }),
        ],
    },
    performance: {
        hints: false
    },
    plugins: [
        new BundleAnalyzerPlugin(
            {
                analyzerPort: 8889, // 指定端口号
                openAnalyzer: false,
            }
        ),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        })
    ]
}