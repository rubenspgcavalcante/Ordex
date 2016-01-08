var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var rename = require('gulp-rename');

gulp.task('default', ['style']);

gulp.task('style', function () {
    gulp.src('src/style/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('src/style/'));
});

gulp.task('start-server', ['style'], function () {
    gulp.watch('src/style/**/*.sass', ['style']);

    gulp.src('src').pipe(server({
        host: '0.0.0.0',
        port: 1234,
        liveload: true
    }));
});