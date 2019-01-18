// JavaScript Document
const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const watch = require("gulp-watch");
const sass = require('gulp-sass');






//flyttar php-filer fr src till pub
gulp.task("copyphp", function() {  
	//return anropar att vänta tills klar innan vi går vidare till nästa
 return gulp.src("src/*.php")
	.pipe(gulp.dest("Pub/"))	
});



//flyttar js-filer fr src till pub
gulp.task("copyjs", function() {  
	//return anropar att vänta tills klar innan vi går vidare till nästa
 return gulp.src("src/js/*.js")
	.pipe(gulp.dest("Pub/js"))
});



//flyttar html-filer fr src till pub
gulp.task("copyimages", function() {  
	//return anropar att vänta tills klar innan vi går vidare till nästa
 return gulp.src("src/images/*.png")
    .pipe(gulp.dest("Pub/images"))	
});



//convertera sass till css och flytta till pub sammanslaget
gulp.task("convertcss", function(){
	return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
	//döper filen till main.min.css miniminerad
	.pipe(concat("main.min.css"))
	.pipe(cleanCSS())
	.pipe(gulp.dest("Pub/css"))

});





//konvertera typescript till js och flytta till pub





gulp.task("watcher", function(){
	
    
	watch("src/js/*.js", function(){
		gulp.start("copyjs");
	});
	
	watch("src/*.php", function(){
		gulp.start("copyphp");
		
	});
	
	
	watch("src/scss/*.scss", function(){
		gulp.start("convertcss");
		
		
	});
	
	watch("src/images/*.jpg", function(){
		gulp.start("copyimages");
		
		
	});
	
	
});



//default
gulp.task("default", ["copyphp", "copyjs", "convertcss","copyimages", "watcher"]);

