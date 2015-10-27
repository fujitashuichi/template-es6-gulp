/*/--------------------------------\*\
|*| REQUIRE
\*\--------------------------------/*/
var gulp = require('gulp');
var watch = require('gulp-eslint');

//var errorMessage = "Error: <%= error.message %>";

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// ESlint
gulp.task('lint', function() {
	var files = ['./src/es-six/**/*.js'];
	gulp.src(files)
		.pipe(eslint({
			globals: {
				'jQuery': true,
				'$': true
			}
		}))
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});
