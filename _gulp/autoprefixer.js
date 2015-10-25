var gulp = require('gulp');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

//var errorMessage = "Error: <%= error.message %>";

// Autoprefixer
gulp.task('autoprefixer', function() {
	var files = ['./src/dist/css/main.css'];
	gulp.src(files)
		.pipe(plumber()) // error時にwatchを止めないやつ
		.pipe(autoprefixer())
		.pipe(gulp.dest('./htdocs/css/'));
});
