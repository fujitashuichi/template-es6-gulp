/*/--------------------------------\*\
|*| REQUIRE
\*\--------------------------------/*/
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var babelify = require('babelify');
var browserify = require('browserify');
var through2 = require('through2');

//var errorMessage = "Error: <%= error.message %>";

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// browserify, babelify
gulp.task('build:js', ['lint:js'], function() {
  var files = ['./src/js/core.js'];

  gulp.src(files)
    .pipe(plumber()) // error時にwatchを止めないやつ
    .pipe(through2.obj(function(file, encode, callback) {
      browserify(file.path)
        .transform(babelify)
        .bundle(function(err, res) {
          if (err) {
            return callback(err)
          };
          file.contents = res;
          callback(null, file)
        });
    }))
    .on("error", function(err) { console.log("Error: " + err.message); })
    .pipe(gulp.dest('./htdocs/js/'));
});
