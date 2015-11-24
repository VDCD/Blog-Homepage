var gulp = require('gulp');
var sass = require('gulp-sass');

//Defining the task to transform SCSS into CSS
gulp.task('styles', function(){
  gulp.src('public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.public/stylesheets/'));
});


//Watch task (to keep executing style on .scss file change)
gulp.task('default',function() {
    gulp.watch('public/sass/**/*.scss',['styles']);
});
