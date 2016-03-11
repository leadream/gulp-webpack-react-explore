var gulp = require('gulp');
var glob = require('glob');
var path = require('path');
var clean = require('gulp-clean');
// var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
// var livereload = require('gulp-livereload');
var webpack = require("gulp-webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = require('./webpack.config');
var entries = {};

//获取文件目录并转化成对象
var files = glob.sync("app/**/*.entry.js");
for (var i = 0; i < files.length; i++) {
    var filePath = files[i];
    var key = filePath.substring(filePath.lastIndexOf(path.sep)+1, filePath.lastIndexOf('.'));
    entries[key] = path.join(__dirname, filePath);
}
//添加要打包在vendors里面的库
entries['vendors'] = ['jquery', 'react','react-dom'];

webpackConfig.entry = entries;

for (var i in entries) {
    if(i!='vendors'){
        var viewPath = entries[i].substring(0,entries[i].lastIndexOf(path.sep));
        console.log(viewPath);
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            template: viewPath+'/index.html',//快来解决路径问题
            filename: 'dist/views/'+i+'.html',//快来解决路径问题
            inject: 'head',
            chunks: ['vendors',i]
        }));
    }
}

gulp.task('clean',function(){
    return gulp.src(['dist/*','assets-map.json'],{read:false})
        .pipe(clean())
});

gulp.task("webpack", function() {
    // console.log(webpackConfig);
    return gulp.src('app/**/*.entry.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('.'));
});

// gulp.task("uglify", function() {
//     return gulp.src('dist/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });
// gulp.task('watch', function() {
//     livereload.listen();
//     gulp.watch(['js/**/*.js', '!js/bundle.js'], ['webpack']);
// });

gulp.task('default', [
    'clean','webpack'
]);