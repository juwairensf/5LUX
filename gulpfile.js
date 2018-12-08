// 引入gulp模块
const gulp = require("gulp");
// 引入gulp-babel;
const babel= require("gulp-babel");
// 引入gulp-sass；
const sass=require("gulp-sass");
sass.compiler=require("node-sass");

// html的转存；
gulp.task("html",()=>{
    return gulp.src(["./src/pages/*.html"]).pipe(gulp.dest("./dist/"));
})

// js的转存及转义；
gulp.task("js",()=>{
    return gulp.src(["./src/js/*.js"])
    .pipe(babel())
    .pipe(gulp.dest("./dist/js"));
})


// sass的转存及转义；
gulp.task("sass",()=>{
    return gulp.src("./src/sass/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("./dist/css"));
})



gulp.task("watch",()=>{
    gulp.watch("./src/pages/*.html",["html"]);
})

