//**
//
// Define Modules up top...
//**

const gulp = require('gulp');
const requireDir = require('require-dir')('./gulp-tasks');
const runSequence = require('run-sequence').use(gulp);
const gulpVars = require('require-dir')('./gulp-vars');
const isProduction = gulpVars.vars();

//**
//
// All tasks here
//
//**

const sequence = callback => {
  if( isProduction ){
    runSequence('clean:build', 'assemble', 'images', 'sass', 'webpack', 'fonts', callback);
  } else {
    runSequence('clean:build', 'assemble', 'images', 'sass', 'webpack', 'fonts', 'sync', 'watch', callback);
  }
};

gulp.task('default', callback => {
  sequence(callback);
});

gulp.task('build', callback => {
  sequence(callback);
});
