const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('sync', function() {
  browserSync({
    server: {
      baseDir: "./build",
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });
  gulp.watch("source/**/*").on('change', reload);
});
