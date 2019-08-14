const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './examples/index.js',
    output: {
        path: path.resolve(__dirname, './examples/km-ui/'),
        publicPath: '/',
        filename: '[name].[hash:7].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('examples')
        },
        modules: ['node_modules']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/'),
        port: 8089,
        open: true, //第一次打开浏览器
        publicPath: '/',
        hot: true
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        },
        {
            test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
            loader: 'url-loader',
            // todo: 这种写法有待调整
            query: {
                limit: 10000,
                name: path.posix.join('static', '[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(jsx?|babel|es6)$/,
            include: process.cwd(),
            exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
            loader: 'babel-loader',
            options: {
                "plugins": [
                    "dynamic-import-webpack"
                ]
            }
        },
        {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './examples/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    devtool: '#eval-source-map'
}