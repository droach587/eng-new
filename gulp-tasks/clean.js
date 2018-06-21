//**
//
// Clean the build folder out!
//
//**
const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean:build', cb => {
  return gulp.src('build', {read: false})
    .pipe(clean());
  cb();
});
