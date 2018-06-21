//**
//
// Move fonts over
//
//**
const gulp = require('gulp');

gulp.task('fonts', function() {
  return gulp.src('source/assets/fonts/**/*')
    .pipe(gulp.dest('build/assets/fonts'));
});
