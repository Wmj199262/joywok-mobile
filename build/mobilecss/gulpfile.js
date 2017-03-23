var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
    concat = require('gulp-concat');       // 文件合并

var paths = {
    SrcPath: ['src/less/*.less'],
};



//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/mobile.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/less')); //将会在src/css下生成mobile.css
});


gulp.task('watch:less',function(){
    gulp.watch(['src/less/index.less'],['testLess','css']);
    gulp.watch(['src/less/*.less'],['testLess','css']);
})

 gulp.task('css', function() {
     return  gulp.src('src/less/mobile.less')
             .pipe(less()) //该任务调用的模块
             .pipe(concat('mobile.css'))
             .pipe(gulp.dest('build/styles'))
 });

 gulp.task('webcss', function() {
     return  gulp.src('src/less/web.less')
             .pipe(less()) //该任务调用的模块
             .pipe(concat('web.css'))
             .pipe(gulp.dest('build/styles'))
 });



 gulp.task('default', function(){
 
 // Watch .css files
 gulp.watch(['src/less/index.less'],['testLess','css','webcss']);
  gulp.watch('src/less/*.css', ['css','webcss']);
 // 
 

});
gulp.task('default',['testLess','css','webcss']); //定义默认任务