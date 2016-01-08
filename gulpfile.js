var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('default', function () {

});

gulp.task('start-server', function () {
    gulp.src('src').pipe(server({
        host: '0.0.0.0',
        port: 1234,
        liveload: true
    }));
});