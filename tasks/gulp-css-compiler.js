const gulp = require('gulp');
const less = require('gulp-less')
const fs = require('fs');
const path = require('path');
const liveReload = require('gulp-livereload');
/**
 * Compile to .css
 */
function compileCss(cb) {
    const siteContext = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'dashboard/data/site-context.json'), { encoding: 'utf8' }));
    const account = siteContext.account;
    const cssPreprocessor = siteContext.css_preprocessor;
    const dest = path.resolve(__dirname, '..', account, 'www/assets/css');
    const g = gulp.src(path.resolve(dest, 'local.' + cssPreprocessor));
    g.pipe(less({ outputStyle: 'expanded' })).pipe(gulp.dest(dest)).pipe(liveReload())
    cb();
}
module.exports = {
    compileCss
}