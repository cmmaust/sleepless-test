const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const del = require('del');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('styles', () => {
  return gulp.src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe( rename( { suffix: '.min' } ) )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('scripts', function () {
  return gulp.src('./src/js/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('clean', () => {
  return del([
    './assets',
  ]);
});

gulp.task('default', gulp.series(['clean', 'styles', 'scripts']));

gulp.task('watch', () => {
  gulp.watch('./src/', (done) => {
    gulp.series(['clean', 'styles', 'scripts'])(done);
  });
});
