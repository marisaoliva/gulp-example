/*
* Dependencias
*/
var gulp = require('gulp');
var stylus = require('gulp-stylus');




// Get one .styl file and render
gulp.task('stylus', function () {
  return gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
     gulp.watch('./stylus/*.styl', ['stylus']);
});
