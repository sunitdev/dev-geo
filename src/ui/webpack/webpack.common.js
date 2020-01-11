const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const UI_DIR = path.dirname(__dirname);
const DIST_DIR = path.join(path.dirname(path.dirname(UI_DIR)), 'dist');

module.exports = {
    entry: path.join(UI_DIR, 'app.js'),

    output: {
        path: DIST_DIR,
        filename: 'app.bundle.js'
    },

    resolve:{
        extensions: ['.js', '.vue'],
        alias: {
            '@': UI_DIR
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
           },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: path.join(UI_DIR, 'index.template.html')
        })
    ]
}

