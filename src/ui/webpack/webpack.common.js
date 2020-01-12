const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader", "postcss-loader",
                  ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
          filename: "styles.css",
          chunkFilename: "styles.css"
        }),
        new HTMLWebpackPlugin({
            template: path.join(UI_DIR, 'index.template.html')
        })
    ]
}

