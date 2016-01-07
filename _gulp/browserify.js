/*/--------------------------------\*\
|*| REQUIRE
\*\--------------------------------/*/
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
//var transform = require('vinyl-transform');
var through2 = require('through2');

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// browserify
gulp.task('browserify', ['babel'], function() {

	var files = ['./src/dist/js/*.js'];

	gulp.src(files)
		.pipe(through2.obj(function(file, encode, callback) {
			browserify(file.path)
				.bundle(function(err, res) {
					file.contents = res;
					callback(null, file)
				});
		}))
		.pipe(gulp.dest('./htdocs/js/'));
});