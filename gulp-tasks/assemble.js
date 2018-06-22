const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const extname = require('gulp-extname');
const assemble = require('assemble');
const app = assemble();
const gulpVars = require('require-dir')('../gulp-vars');
const isProduction = gulpVars.vars();
const gulpIf = require('gulp-if');


//Change Layouts for Production Builds
app.option('layout', gulpIf(isProduction, 'layout.hbs', 'layout.hbs'));

gulp.task('assemble', () => {
  app.build(['views'], function(err) {
    if (err) throw err;
  });
});

app.task('views', function() {
  app.helpers('source/helpers/**/*.js');
  app.layouts('source/views/layouts/*.hbs');
  app.partials('source/views/partials/*.hbs');
  app.pages('source/views/pages/**/*.hbs');
  app.data('source/data/**/*.{json,yml}');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(htmlmin())
    .pipe(extname())
    .pipe(app.dest('build/'));
});

module.exports = app;
