var gulp = require('gulp');

var runSequence = require('run-sequence');

var autoprefixer = require('gulp-autoprefixer'),
		   clean = require('del');

gulp.task('clean', function() {
	return clean(['./dist']);
});

gulp.task('prefix', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', function() {
    gulp.src('*.html').pipe(gulp.dest('dist'));
    gulp.src('*.png').pipe(gulp.dest('dist'));
    gulp.src('img/**').pipe(gulp.dest('dist/img'));
    gulp.src('script/*.js').pipe(gulp.dest('dist/script'));
});

gulp.task('default', function() {
    runSequence('clean',
                ['build', 'prefix']
    );
});