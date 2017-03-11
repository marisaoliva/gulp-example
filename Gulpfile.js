/*
* Dependencias
*/
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var dust = require('gulp-dust');// XXX:






// Get one .styl file and render
gulp.task('stylus', function () {
  return gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('dust', () => {
    return gulp.src('dust/*.html')
        .pipe(dust())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
     gulp.watch('./stylus/*.styl', ['stylus']);
     gulp.watch('./dust/*.html', ['dust']);
});
