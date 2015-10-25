/* -------------------------------- *\
 * REQUIRE
\* -------------------------------- */
var gulp = require('gulp');
var watch = require('gulp-watch');

//var errorMessage = "Error: <%= error.message %>";
// Watch
gulp.task('watch', function() {
	// css
	gulp.watch('./src/scss/**/*.scss', ['sass']);
	gulp.watch('./src/dist/css/**/*.css', ['autoprefixer']);
	// js
	gulp.watch('./src/es-six/**/*.js', ['babel']);
	gulp.watch('./src/dist/js/**/*.js', ['browserify']);
});