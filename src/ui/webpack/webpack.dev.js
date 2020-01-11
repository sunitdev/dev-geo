const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',

    devServer: {
        open: true,
        port: 8000,
        hot: true
    },

    plugins: [
        new HotModuleReplacementPlugin()
    ]
});
