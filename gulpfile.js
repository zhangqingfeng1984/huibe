var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');

gulp.task('less', function () {
    gulp.src('src/css/less/app.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
});

gulp.task('server', function () {
    connect.server({
        livereload: true,
        /*root: "src",*/
        port: 8080
    });
});

gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(connect.reload());
});
gulp.task('watch', function () {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch(['src/css/less/*.less'], ['less']);
});

gulp.task('default', ['server', 'watch']);