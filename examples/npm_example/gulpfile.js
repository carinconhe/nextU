var gulp    = require('gulp');
var minjs   = require('gulp-uglify');
var rename  = require('gulp-rename');
//var stylus = require('gulp-stylus');

gulp.task('test',function(){
  console.log('Primer tarea con gulp');
});

gulp.task('mainminjs',function(){
  gulp.src('./src/js/*.js')
  .pipe(minjs())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('varmainjs',function(){
  gulp.watch('./src/js/*.js', gulp.series('mainminjs'));
});
