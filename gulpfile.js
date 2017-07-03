/*
	gulpfile.js主配置文件，用于定义任务
	此处的代码由Node执行

*/

'use strict';
//加载模块
var gulp=require('gulp');
var less=require('gulp-less');
// var cssnano=require('gulp-cssnano');
var cssmin=require('gulp-cssmin');


//定义一个简单的任务
gulp.task('hello',function(){
	console.log('hello World');
});

//html复制文件的任务
gulp.task('html',function(){
	gulp.src('src/**/*.html')//读取文件
	.pipe(gulp.dest('dist/'));//通过管道再次操作，写入到目标位置
});

//less编译和压缩到任务
gulp.task('less',function(){
	gulp.src('src/less/*.less')
	.pipe(less())//编译
	// .pipe(cssnano())//压缩
	.pipe(cssmin())
	.pipe(gulp.dest('dist/css/'));
});