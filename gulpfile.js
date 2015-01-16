var args = require('yargs').argv,
    gulp = require('gulp');

// Clean then build
gulp.task('build', function (cb) {
  var runSequence = require('run-sequence');
  runSequence('clean',
              'minify',
              'test',
              'bump-version',
              cb);
});

/**
 * Run test once and exit
 */
gulp.task('test', function (cb) {
  var runSequence = require('run-sequence');
  runSequence('test:karma',
              'test:protractor',
              cb);
});

gulp.task('test:karma', function (done) {
  var karma = require('karma').server,
      opts = {
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
      };

  karma.start(opts, done);
});

gulp.task('test:protractor', function () {
  // TODO...
});

gulp.task('minify', function () {
  var uglify = require('gulp-uglifyjs');
  return gulp.src('src/*.js')
      .pipe(uglify('angular-phonegap-app.min.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function() {
  var jshint = require('gulp-jshint');
  return gulp.src('src/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter('default'));
});

gulp.task('bump-version', function (cb) {
    var util = require('gulp-util'),
        bump = require('gulp-bump'),
        util = require('gulp-util');
        opts = {};

  if (args.buildVersion != null) {
    opts.version = args.buildVersion;
    util.log('  Using specified buildVersion ' + opts.version);
  }

  util.log('  Don\'t forget to tag the new build version and push the tags!');

  return gulp.src(['./package.json', './bower.json'])
             .pipe(bump(opts))
             .pipe(gulp.dest('./'));
});

// Remove build artifacts
gulp.task('clean', function () {
    var clean = require('gulp-clean');
    return gulp.src(['dist'], {read: false})
               .pipe(clean());
});

// Serve up the dev version of the app
gulp.task('serve', function () {
    var express = require('express'),
        app = express();
    app.use(express.static(__dirname));
    app.listen(8000);
});
