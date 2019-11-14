var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync'),
  cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('styles/scss/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('styles/css'))
    .pipe(browserSync.stream());
})

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('code', function () {
  return gulp.src('/*.html')
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* Gulp watch task */
gulp.task('watch', function () {
  watch('styles/scss/**/*.scss', gulp.parallel('sass'))
  watch('/*.html', gulp.parallel('code'))
})

/* Gulp default task */
gulp.task('default', gulp.parallel('sass', 'code', 'watch', 'browser-sync'))
