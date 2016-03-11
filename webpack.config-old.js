var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var entries = require( './entries.js' );

var plugins = [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // new ExtractTextPlugin("css/[name].css"),    //单独使用style标签加载css并设置其路径
    ];
for(var item in entries){
    plugins.push(new HtmlwebpackPlugin({
        template: './app/'+item +'/index.html',
        filename: './dist/'+item +'/index.html',
        inject: true
        // chunks: [i,'commons']
    }))
}

module.exports = {
    entry: entries,
    output: {
        filename: './dist/[name]/js/[name].js'
    },
    resolve: {
        root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
        alias: {},
        extensions: ['', '.js', '.jsx', '.css', '.scss', '.ejs', '.png', '.jpg']
    },
    module: {
        loaders: [
            // { test: /\.js$/, loader: 'es6-loader' },
            { test: /\.js$/, loader: 'jsx-loader' },
            { test: /\.less$/, loader: "style!css!less"},
            // { test: /\.css$/, loader:ExtractTextPlugin.extract("style", "css") },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.html$/, loader: 'file?name=dist/[name]/[name].[ext]' }
        ]
    },
    plugins: plugins
}