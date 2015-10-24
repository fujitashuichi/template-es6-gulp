var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

//var errorMessage = "Error: <%= error.message %>";

// Babel
gulp.task('babel', function() {
	var files = ['./src/es-six/**/*.js'];
	gulp.src(files)
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest('./src/dist/js/'));
});
