const gulp = require("gulp");
var del = require("del");

const dateAndTime = new Date().toISOString().split(".")[0].replace(/\:/g, "-");
console.log("dateAndTime: ", dateAndTime);

gulp.task("deleteAll", async (done) => {
	await del(["./backUp/*"]);
	done();
});

gulp.task("backUpPages", (done) => {
	gulp.src("./pages/**/*").pipe(gulp.dest(`backUP/${dateAndTime}/pages`));
	done();
});

gulp.task("backUpComponents", (done) => {
	gulp
		.src("./components/**/*")
		.pipe(gulp.dest(`backUP/${dateAndTime}/components`));
	done();
});

gulp.task("backUpFunctions", (done) => {
	gulp
		.src("./functions/**/*")
		.pipe(gulp.dest(`backUP/${dateAndTime}/functions`));
	done();
});

gulp.task("backUpStylesSASS", (done) => {
	gulp.src("./styles/**/*").pipe(gulp.dest(`backUP/${dateAndTime}/styles`));
	done();
});

gulp.task("backUpPublic", (done) => {
	gulp.src("./public/**/*").pipe(gulp.dest(`backUP/${dateAndTime}/public`));
	done();
});

gulp.task("backUpUseContext", (done) => {
	gulp.src("useContext.js").pipe(gulp.dest(`backUp/${dateAndTime}`));
	done();
});

gulp.task("backUpUseAllJsInRoot", (done) => {
	gulp.src("*.js").pipe(gulp.dest(`backUp/${dateAndTime}`));
	done();
});

gulp.task(
	"default",
	gulp.series(
		"deleteAll",
		"backUpPages",
		"backUpComponents",
		"backUpFunctions",
		"backUpStylesSASS",
		"backUpUseContext",
		"backUpPublic",
		"backUpUseAllJsInRoot"
	)
);
