var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    prefix    = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    refresh   = require('gulp-livereload'),
    server    = require('tiny-lr')();
    imagemin = require('gulp-imagemin');
	changed  = require('gulp-changed');
	cssmin = require('gulp-cssmin');
    browserSync = require('browser-sync').create();

 gulp.task('browserSync', function() {  
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 8080,
    startPath: 'dist/index.html',
  })
});
gulp.task('imagemin', function() {
   var imgSrc = './src/img/*.+(png|jpg|gif)',
   imgDst = './dist/img';   
   gulp.src(imgSrc)
   .pipe(changed(imgDst))
   .pipe(imagemin())
   .pipe(gulp.dest(imgDst));
});

gulp.task( 'minify-css', function() {
  gulp.src( './dist/css/style.css')
    .pipe( minifycss() )
    .pipe( gulp.dest( './dist/css' ) );
});


gulp.task('sass', function () {
  return gulp.src('src/assets/stylesheets/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/bootstrap'));
});


gulp.task('compileStyles', function() {
    gulp.src('src/style.scss')
    .pipe(sass({
        noCache      : true,
        precision    : 4,
        unixNewlines : true
    }))
    .pipe(prefix('last 3 version'))
    .pipe(minifycss())    
    .pipe(gulp.dest('dist/css'))  
    .pipe(refresh(server));
});
 
gulp.task('watch',['browserSync','imagemin','minify-css','compileStyles','sass'], function() {
    server.listen(35729, function( err ) {
        if ( err ) { return console.log( err ); }
 
        gulp.watch('src/*.{sass,scss}', [
            'compileStyles'
        ]);
        gulp.watch('dist/index.html',browserSync.reload);
        gulp.watch('dist/css/*.css',browserSync.reload);
        
    });
});