// 引入gulp模块
const gulp = require("gulp");
// 引入服务器插件；
const  connect = require("gulp-connect")
// 引入gulp-babel;es6编译成es5；
const babel= require("gulp-babel");
// 引入gulp-sass；将sass编译成css；
const sass=require("gulp-sass");
sass.compiler=require("node-sass");
// 引入gulp合并插件；
const concat=require("gulp-concat");
// 引入js压缩插件；
const uglify=require("gulp-uglify");
// 引入css压缩插件；
const  cleanCss = require("gulp-clean-css");
// 引入http-proxy-middleware；
const proxy = require("http-proxy-middleware")


gulp.task("connect",()=>{
    connect.server({
        root:"./dist",
        port:8888,
        livereload:true,
        middleware:function(){ //中间件选项
            // console.log(opt)
            return[
                proxy("/api",{
                    target:"http://localhost:3000",
                    pathRewrite:{
                        '^/api' : '/',  //rewrite path
                    }
                })
            ]
        }
    });
})
// html的转存；
gulp.task("html",()=>{
    return gulp.src(["./src/*.html"]).pipe(gulp.dest("./dist/"))
    .pipe(connect.reload());
})

// json的转存；
gulp.task("json",()=>{
    return gulp.src(["./src/json/*.json"]).pipe(gulp.dest("./dist/json"))
    .pipe(connect.reload());
})

// js的转存及转义；
gulp.task("js",()=>{
    return gulp.src(["./src/js/*.js"])
    // .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
    .pipe(connect.reload());
})


// sass的转存及转义；
gulp.task("sass",()=>{
    return gulp.src("./src/sass/*.scss")
    .pipe(sass().on("error",sass.logError))
    // .pipe(cleanCss())
    .pipe(gulp.dest("./dist/css"))
    .pipe(connect.reload());
})
// images的转存；
gulp.task("images",()=>{
    return gulp.src(["./src/images/*.png"]).pipe(gulp.dest("./dist/images"))
    .pipe(connect.reload());
})



// 检测；
gulp.task("watch",()=>{
    gulp.watch("./src/*.html",["html"]);
    gulp.watch("./src/sass/*.scss",["sass"]);
    gulp.watch("./src/js/*.js",["js"]);
    gulp.watch("./src/images/*.png",["images"]);
    gulp.watch("./src/json/*.json",["json"]);
})
gulp.task("default",["watch","connect"]);