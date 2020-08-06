var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var server = require("browser-sync").create();
var del = require("del");

function html() {
	return gulp.src("source/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest("build"));
}

function style() {
	return gulp.src("source/sass/style.scss")
		.pipe(plumber())
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(postcss([
			autoprefixer({
				overrideBrowserslist: ['> 0.1%']
			})
		]))
		.pipe(gulp.dest("build/css"))
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/css"))
		.pipe(server.stream());
}

function script() {
	return gulp.src("source/js/**/*.js")
		// .pipe(uglify())
		.pipe(gulp.dest("build/js"));
}

function images() {
	return gulp.src("source/img/**/*.{png,jpg,svg}")
		    .pipe(imagemin([
		      imagemin.optipng({optimizationLevel: 3}),
		      imagemin.jpegtran({progressive: true}),
		      imagemin.svgo()
		    ]))
		    .pipe(gulp.dest("build/img"));
}

function watch() {
	server.init({
		server: {
			baseDir:"build/"
			// server:"source/"
		}
	});
	gulp.watch("source/sass/**/*.{scss,sass}", style);
	gulp.watch("source/*.html").on("change", gulp.series(html, server.reload));
}

function clean () {
	return del(['build/*']);
}

function copy () {
	return gulp.src([
		"source/fonts/**/*.{woff,woff2,ttf}",
		"source/*.html"
		], {
		base:"source"
		})
	.pipe(gulp.dest("build"));
}

gulp.task('style', style);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, copy, gulp.parallel(html, style, images, script)));