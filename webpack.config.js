var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AssetsPlugin = require('assets-webpack-plugin');
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {},
    output: {
        filename: "dist/js/[name]-[chunkhash].js",
        publicPath:'../../',
        libraryTarget:'umd'
    },
    // externals:{
    //     'react': {
    //         root: 'React',
    //         commonjs2: 'react',
    //         commonjs: 'react',
    //         amd: 'react'
    //     },
    //     'jquery': {
    //         root: 'jQuery',
    //         commonjs2: 'jquery',
    //         commonjs: 'jquery',
    //         amd: 'jquery'
    //     },
    //     'react-dom':{
    //         root:'ReactDOM',
    //         commonjs2: 'react-dom',
    //         commonjs: 'react-dom',
    //         amd:'react-dom'
    //     }
    // },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                loader: 'jsx-loader'
            },
            // {
            //     test: /\.js$/,
            //     loader: 'es6-loader'
            // },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=50000&name=dist/img/[name]-[hash].[ext]' }
        ]
    },
    devtool:'source-map',
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery",
        //     "React" : "react",
        //     "ReactDom" : "react-dom",
        // }),
        new ExtractTextPlugin("dist/css/[name]-[chunkhash].css"),
        new AssetsPlugin({
                filename:'assets-map.json',
                update: true,
                prettyPrint: true
            })
    ]
};