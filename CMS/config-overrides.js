const { override, fixBabelImports, addLessLoader, addWebpackPlugin,addDecoratorsLegacy } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const darkThemeVars = require('antd/dist/dark-theme');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
            //...darkThemeVars,
            '@primary-color': '#1DA57A'
        },
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    addDecoratorsLegacy()
);