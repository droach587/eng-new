const gulp = require('gulp');
const watch = require('gulp-watch');

//**
//
// Watch it babe
//
//**
gulp.task('watch', () => {
  gulp.watch(`source/assets/scss/**/*.scss`, ['sass']);
  gulp.watch(`source/assets/js/**/*.js`, ['webpack']);
  gulp.watch(`source/assets/img/**/*`, ['images']);
  gulp.watch(`source/views/**/*.hbs`, ['assemble', 'sass']);
  gulp.watch(`source/data/**/*.{json,yml}`, ['assemble', 'sass']);
});
