var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

// Compile Sass into CSS
gulp.task('sass', function() {
   return gulp.src('./sass/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass())
      .pipe(gulp.dest('./css'))
});
// Minify CSS files
gulp.task('minify-css', () => {
   return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
});

// Watch for changes
gulp.task('watch', function(){
   gulp.watch('./sass/**/*.scss', gulp.series('sass', 'minify-css')); 
   // Other watchers
})