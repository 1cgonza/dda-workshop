const gulp    = require('gulp');
const sync    = require('browser-sync').create();
const webpack = require('webpack-stream');
const config  = require('./webpack.config');

gulp.task('serve', ['pack'], function() {
  sync.init({
    notify: false,
    open: false,
    server: './build'
  });

  gulp.watch(['./src/**/*.*'], ['pack']);
});

gulp.task('pack', function() {
  return gulp.src('src/scripts.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('build'))
    .pipe(sync.stream());
});

gulp.task('default', ['serve']);
