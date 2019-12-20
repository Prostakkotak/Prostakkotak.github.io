var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync'),
  cleanCSS = require('gulp-clean-css'),
  minify = require('gulp-minify');

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
  browserSync.reload()
})

gulp.task('js', function() {
  return gulp.src('js-raw/**/*.js')
  .pipe(minify({
    noSource: true
  }))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.stream());
})

/* Gulp watch task */
gulp.task('watch', function () {
  watch('styles/scss/**/*.scss', gulp.parallel('sass'))
  watch('js-raw/**/*.js', gulp.parallel('js'))
  watch('./*.html', gulp.parallel('code'))
})

/* Gulp default task */
gulp.task('default', gulp.parallel('sass', 'code', 'watch', 'browser-sync'))
