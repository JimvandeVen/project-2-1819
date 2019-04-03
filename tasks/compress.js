const gulp = require('gulp');

const inputDir = path.join(__dirname, 'public');
const outputDir = inputDir;

const brotliSettings = {
    skipLarger: true,
    quality: 11, // maximum compression
};

gulp.src([`src/**/*.*`,])
    .pipe(brotli.compress(brotliSettings))
    .pipe(gulp.dest(outputDir));