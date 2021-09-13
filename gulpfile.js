const gulp = require("gulp");
const {series} = require("gulp");
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");

const sass = require('gulp-sass')(require('sass'));


jsMin = (cb)=>{
    gulp.src("./src/scripts/*.scripts")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"));
    cb();
}

cssMin = (cb)=>{
    gulp.src("./src/css/*.styles")
        .pipe(cleanCss())
        .pipe(gulp.dest("./dist/css/"));
    cb();
}

htmlMin = (cb)=>{
    gulp.src("./src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./dist/"));
    cb();
}

sassCom = (cb) => {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest( './src/css'))
        .pipe(gulp.dest('./dist/css/' ));
    cb();
}


exports.default= series(jsMin, cssMin, htmlMin, sassCom);