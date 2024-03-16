import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';

// Compile Sass into CSS
gulp.task('sass', function() {
   return gulp.src('./Sass/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'))
   .on('end', function(){ console.log('Sass compilation completed.'); });
});
// Minify CSS files
gulp.task('minify-css', () => {
   return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
});

// Watch for changes
gulp.task('watch', function(){
   gulp.watch('./Sass/**/*.scss', gulp.series('sass', 'minify-css')); 
   // Other watchers
})