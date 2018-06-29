const gulp = require('gulp');

gulp.task('copy:data', function() {
  return gulp.src('source/assets/js/data/**/*')
    .pipe(gulp.dest('build/assets/js/data'));
});
