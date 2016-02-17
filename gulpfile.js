var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');

gulp.task('default', ['style', 'transform-ts', 'transform-jsx']);

gulp.task('style', function () {
    return gulp.src('src/style/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/style/'));
});

gulp.task('transform-ts', function () {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: 'amd',
            experimentalDecorators: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/.'));
});

gulp.task('transform-jsx', function () {
    return gulp.src('src/**/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/.'));
});

gulp.task('watcher:sass', function () {
    return gulp.watch('src/style/**/*.sass', ['style']);
});

gulp.task('watcher:typescript', function () {
    return gulp.watch('src/**/*.ts', ['transform-ts']);
});

gulp.task('watcher:react', function () {
    return gulp.watch('src/**/*.jsx', ['transform-jsx']);
});

gulp.task('watchers', ['watcher:typescript', 'watcher:react', 'watcher:sass']);

gulp.task('clean', [], function(){
    return gulp.src(['src/app/**/*.js', 'src/app/**/*.map']).pipe(clean());
});

gulp.task('start-server', ['watchers'], function () {
    return gulp.src('src').pipe(server({
        host: '0.0.0.0',
        port: 1234,
        liveload: true
    }));
});