/*/--------------------------------\*\
|*| REQUIRE
\*\--------------------------------/*/
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//var errorMessage = "Error: <%= error.message %>";

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
gulp.task('sync', function() {
	browserSync.init({
		server: {
			baseDir: './htdocs/'
		}
	});
});
