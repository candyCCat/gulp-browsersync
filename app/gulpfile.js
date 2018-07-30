/*
 * @Author: iceStone
 * @Date:   2016-01-27 10:21:56
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-07-30 20:47:30
 */

'use strict';
/**
 * 1. LESS编译 压缩 合并
 * 2. JS合并 压缩 混淆
 * 3. img复制
 * 4. html压缩
 */

// 在gulpfile中先载入gulp包，因为这个包提供了一些API
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

// 1. LESS编译 压缩 --合并没有必要，一般预处理CSS都可以导包
gulp.task('style', function() {
  gulp.src(['src/styles/*.less', '!src/styles/_*.less'])
//这里第二个参数是排除_*.less（被其他less文件导入的less文件）
    .pipe(less())//编译成css文件
    .pipe(cssnano())//压缩
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.reload({//通知浏览器重新加载
      stream: true
    }));
});

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// 2. JS合并 压缩混淆
gulp.task('script', function() {
  gulp.src('src/scripts/*.js')
    .pipe(concat('all.js'))//合并为all.js文件
    .pipe(uglify())//压缩混淆
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// 3. 图片复制
gulp.task('image', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var htmlmin = require('gulp-htmlmin');
// 4. HTML
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,//空白缩进
      removeComments: true//删除评论
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var browserSync = require('browser-sync');
gulp.task('serve', function() {
  browserSync({
    server: {//开启一个静态文件服务器，默认：3000端口
      baseDir: ['dist']
    },
  }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
  });
  //监听源文件的变化
  gulp.watch('src/styles/*.less',['style']);
  gulp.watch('src/scripts/*.js',['script']);
  gulp.watch('src/images/*.*',['image']);
  gulp.watch('src/*.html',['html']);
});