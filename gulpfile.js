/**
 * CLI version: 2.3.0
 * Local version: 4.0.2
 */
// imports
const gulp = require('gulp');
const fs = require("fs");
const liveReload = require('gulp-livereload');
// vars
const url = './dashboard/data/';
const data = fs.readFileSync(url + 'site-context.json');
const content = JSON.parse(data);
const adminData = fs.readFileSync(url + 'admin-data.json');
const adminContent = JSON.parse(adminData);
const siteContext = JSON.stringify(content.account).replace(/"/g, ''); //
const cssPreprocessor = JSON.stringify(content.css_preprocessor).replace(/"/g, '');
// description
console.log('\n ********************************* \n')
const packageJSON = require('./package.json');
/*console.log('Last update: ' + adminContent.adminData[0].date);
console.log('Buildkit Version: ' + adminContent.adminData[0].version);
console.log('Github Release: ' + adminContent.adminData[0].release)*/
if(cssPreprocessor === 'less'){
    console.log('CSS Preprocessor: ' + cssPreprocessor + ', version: ' + packageJSON.dependencies["gulp-less"]);
}
if(cssPreprocessor === 'scss'){
    console.log('CSS Preprocessor: ' + cssPreprocessor + ', version: ' + packageJSON.devDependencies["gulp-sass"]);
}
console.log('Gulp version: ' +  packageJSON.devDependencies.gulp);
console.log('-------------');
console.log('Currently working in: ' + siteContext);

/**
 * Tasks ./tasks/*js
 */
require('./tasks/gulp-concatJs')();
require('./tasks/gulp-webp-converter');

const gulpClean = require('./tasks/gulp-clean');
const gulpMarkup = require('./tasks/gulp-page-layout');
const gulpCss = require('./tasks/gulp-css');
const gulpCssCompiler = require('./tasks/gulp-css-compiler');

console.log('\n ********************************* \n')

gulp.task('watch', async function () {
    gulp.watch([url + 'markup-data.json'], gulp.series(
        gulpClean.cleanProject,
        gulp.parallel(
            gulp.series(
                gulpCss.collectCss,
                gulpCss.concatCss
            ),
            gulp.series(
                gulpMarkup.collectMarkup,
                gulpMarkup.concatMarkup
            )
        )
    ));

    gulp.watch([
        './*/www/assets/css/local.less',
        './*/www/assets/css/local.scss'
    ], gulpCssCompiler.compileCss)

    gulp.watch('./*/www/layout.php', (cb) => {
        gulp.src('./*/www/layout.php')
            .pipe(liveReload())
            .on('error', console.log.bind(console));
        cb();
    });

    liveReload.listen({start: true});

});

const less = require('gulp-less');
