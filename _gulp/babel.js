/*/--------------------------------\*\
|*| REQUIRE
\*\--------------------------------/*/
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

//var errorMessage = "Error: <%= error.message %>";

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// Babel
gulp.task('babel', ['lint'], function() {
	var files = ['./src/es-six/**/*.js'];
	gulp.src(files)
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest('./src/dist/js/'));
});
