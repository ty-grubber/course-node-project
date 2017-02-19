var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint());
});

gulp.task('inject', function () {
    var wireDep = require('wiredep').stream;
    var inject = require('gulp-inject');
    
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']);
    
    var injectOptions = {
        ignorePath: '/public'
    }
    
    var wireDepOptions = { 
        bowerJson: require('./bower.json'), 
        directory: './bower_components',
        ignorePath: '../../bower_components'
    }
    
    return gulp.src('./src/views/*.html')
        .pipe(wireDep(wireDepOptions))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});