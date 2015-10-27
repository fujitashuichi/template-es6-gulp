/*/--------------------------------\*\
|*| REQUIRE
\*\--------------------------------/*/
var gulp = require('gulp');
var eslint = require('gulp-eslint');

//var errorMessage = 'Error: <%= error.message %>';

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// lint seting in commentout
/*eslint arrow-parens: [2, "always"]*/
/*eslint-env es6*/
// ESlint
gulp.task('lint', function() {
	var files = ['./src/es-six/**/*.js'];
	return gulp.src(files)
		.pipe(eslint({
			globals: {
				'jQuery': true,
				'$': true
			},
			ecmaFeatures: {
				'arrowFunctions': true,
				'blockBindings': true,
				'forOf': true,
				'jsx': true
			},
		}))
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});
