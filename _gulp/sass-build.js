/*/--------------------------------\*\
|*| REQUIRE
\*\--------------------------------/*/
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//var errorMessage = "Error: <%= error.message %>";

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// SCSS
gulp.task('build:sass', function() {
  var files = ['./src/scss/main.scss'];
  gulp.src(files)
    .pipe(plumber()) // error時にwatchを止めないやつ
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./htdocs/css/'));
});
