const gulp = require('gulp');
const { src, dest, series, parallel, watch } = require('gulp');// src -source from where, dest- to move, series - task by task, parallel -tasks in parallel
const del = require('del');//delete files and directories
const browserSync = require('browser-sync').create();// mini web server
const sass = require('gulp-sass')(require('sass'));// sass
const concat = require('gulp-concat'); //concatanate files
const minifyCss = require('gulp-clean-css'); // minified css files
const babel = require('gulp-babel'); //for conver JS for old JS readiable for browser
const browserify = require('browserify');//for compiling commonjs modules for the browser
const source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer'); //for converting streaming vinyl files to use buffers
const minifyJs = require('gulp-uglify');


// for running static server
const webServer = () => {
    browserSync.init({
        server: {
            baseDir: './public',
        },
        browser: "google chrome",
        port: 3001,
        host: 'localhost',
        notify: false

    })
}

// clean files in public folder
const cleanup = () => {
    return del(['./public']);
}

// change directory html-file
const htmlTask = () => {
    return src('./src/*.html')
        .pipe(dest('./public'))
        .pipe(browserSync.reload({ stream: true }))
}

// create css-files from *.scss
const scssTask = () => {
    return src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(dest('./public'))
        .pipe(browserSync.reload({ stream: true }))
};

const jsTask = () => {
    return browserify({ entries: './src/components/index', extensions: ['.js'], debug: true })
        .transform('babelify', {
            ignore: ["node_modules"],
        })
        .bundle()
        .pipe(source('bundel.js'))
        .pipe(buffer())
        // .pipe(minifyJs())
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.reload({ stream: true }));
};

// const imgTask = () => {
//     return src('./public/assets/images/**.*')
//         .pipe(dest('./public/assets/images'))
// }

// const iconTask = () => {
//     return src('./src/assets/icons/*.*')
//         .pipe(dest('./public/assets/icons'))
//         .pipe(browserSync.reload({ stream: true }));
// }


const watchFiles = () => {
    watch('./src/*.html', series(htmlTask));
    watch('./src/styles/*.scss', series(scssTask));
    watch('./src/components/*.js', series(jsTask));
    // watch('./src/assets/images/*.*', series(imgTask));
    // watch('./src/assets/icons/*.*', series(iconTask));
}

const start = series(cleanup, parallel(htmlTask, scssTask, jsTask));


exports.default = parallel(start, watchFiles, webServer);
