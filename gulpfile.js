var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['style']);

gulp.task('style', function () {
    gulp.src('src/style/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/style/'));
});

gulp.task('compile-ts', function () {
    gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/.'));
});

gulp.task('watcher:sass', function () {
    gulp.watch('src/style/**/*.sass', ['style']);
});

gulp.task('watcher:typescript', function () {
    gulp.watch('src/**/*.ts', ['compile-ts']);
});

gulp.task('start-server', ['watcher:sass'], function () {
    gulp.src('src').pipe(server({
        host: '0.0.0.0',
        port: 1234,
        liveload: true
    }));
});