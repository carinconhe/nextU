var gulp = require('gulp');
var minjs = require('gulp-uglify');
//var stylus = require('gulp-stylus');

gulp.task('test',function(){
  console.log('Primer tarea con gulp');
});

gulp.task('mainminjs',function(){
  gulp.src('./src/js/main.js')
  .pipe(minjs())
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('varmainjs',function(){
  //gulp.watch('./src/js/*.js',['mainminjs']);
  gulp.watch('./src/js/*.js', ['mainminjs']);
});
