var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

//var errorMessage = "Error: <%= error.message %>";

// SCSS
gulp.task('sass', function() {
	var files = ['./src/scss/main.scss'];
	gulp.src(files)
		.pipe(plumber()) // error時にwatchを止めないやつ
		.pipe(sass())
		.pipe(gulp.dest('./src/dist/css'));
});
