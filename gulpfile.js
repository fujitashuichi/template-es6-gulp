/* -------------------------------- *\
 * REQUIRE
\* -------------------------------- */
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var requireDir = require('require-dir');
var dir = requireDir('./_gulp');

//var errorMessage = "Error: <%= error.message %>";

/* -------------------------------- *\
 * TASKS
\* -------------------------------- */

// Default
gulp.task('default', ['watch']);
