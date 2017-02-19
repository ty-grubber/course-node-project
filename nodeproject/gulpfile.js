var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

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

gulp.task('serve', ['style', 'inject'], function() {
    var options = {
        script: 'app.js',
        delayTime: 1,
        watch: jsFiles
    };
    
    return nodemon(options)
        .on('restart', function(ev) {
            console.log('Restarting Server.');
        });
});