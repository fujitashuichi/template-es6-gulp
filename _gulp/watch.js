/* -------------------------------- *\
 * REQUIRE
\* -------------------------------- */
var gulp = require('gulp');
var watch = require('gulp-watch');

//var errorMessage = "Error: <%= error.message %>";

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// 直列。前のタスクが終了したら次へ。4行(/^o^)/
// watchでのタスク指定は依存関係にある一番最後のもの。
gulp.task('run', function() {
  // css
  gulp.watch('./src/scss/**/*.scss', ['build:sass']);
  // js
  gulp.watch('./src/js/**/*.js', ['build:js']);
});

// 一応直列。distフォルダを監視。変更で次のタスクが発火。
// 記述がめんどくさい。dir理解してないと見づらい。糞。
// gulp.task('watch', function() {
//  // css
//  gulp.watch('./src/scss/**/*.scss', ['sass']);
//  gulp.watch('./src/dist/css/**/*.css', ['autoprefixer']);
//  // js
//  gulp.watch('./src/es-six/**/*.js', ['lint']);
//  gulp.watch('./src/es-six/**/*.js', ['babel']);
//  gulp.watch('./src/dist/js/**/*.js', ['browserify']);
//  // text
//  console.log('gulp tasks end.');
// });
