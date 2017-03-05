var gulp = require('gulp');
var exec = require('child_process').exec;
var sass = require('gulp-sass');
// var jshint = require('gulp-jshint');

gulp.task('sass', function() {
    gulp.src('./src/app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/app/**/*.scss', ['sass']);
});

gulp.task('jshint', function() {
    gulp.src('src/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('lite-server', function(cb) {
    exec('npm run lite', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('lite', ['lite-server']);
gulp.task('default', ['sass', /*'jshint',*/ 'lite-server']);