const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');

//**
//
// Generate Icon font form svgs
// Uncomment include in scss file
//
//**
gulp.task('iconfont', function(){
  gulp.src(['source/assets/icons/svgs/*.svg'])
    .pipe(iconfont({
      fontName: 'custom-icon-font',
      formats: ['ttf', 'eot', 'woff', 'svg'],
      normalize: true,
      fontHeight: 1100
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src('source/assets/icons/_icon-font.scss')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'custom-icon-font',
          fontPath: '../fonts/icons/',
          className: 'i'
        }))
        .pipe(gulp.dest('source/assets/scss/base'));
    })
    .pipe(gulp.dest('source/assets/fonts/icons'));
});
