var gulp = require('gulp');
var browserify = require('browserify');
var cssMin = require('gulp-css');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var paths = {
    pages: ['src/*.html'],
    symbols: ['src/images/symbol/*.png'],
    favicon: ['src/images/favicon/*'],
    fonts: ['src/fonts/*.woff']
};

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-symbols', function () {
    return gulp.src(paths.symbols)
        .pipe(gulp.dest('dist/images/symbol'));
})

gulp.task('copy-favicon', function () {
    return gulp.src(paths.favicon)
        .pipe(gulp.dest('dist/images/favicon'));
})

gulp.task('copy-fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('cssMinify', function () {
    return gulp.src('src/**/*.css')
        .pipe(cssMin())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-html'), gulp.parallel('copy-symbols'),
    gulp.parallel('copy-favicon'), gulp.parallel('copy-fonts'), gulp.parallel('cssMinify'),
    function () {
        return browserify({
                basedir: '.',
                debug: true,
                entries: ['src/main.ts'],
                cache: {},
                packageCache: {}
            })
            .plugin(tsify)
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('dist'));
    }));