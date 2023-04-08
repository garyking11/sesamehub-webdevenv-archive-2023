var gulp = require('gulp')
const fs = require("fs");
const concat = require('gulp-concat');
var parse = require('parse').Parse;
const path = require('path');
const url = './dashboard/data/';
const data = fs.readFileSync(url + '/site-context.json');
const content = Buffer.from(data).toString('utf8');
const accountName = JSON.parse(content);
const siteContext = accountName.account;
const siteManager = accountName.sm_version;
const dataVersion = accountName.data_version;
const outputDir = './' + siteContext + '/www';
const jsConcatDir = outputDir + '/assets/js/concat-js-files/';

module.exports = function () {

    gulp.task('concatJsFiles', function () {
        console.log('JS files concatenated to aggregate.js');
        return gulp.src(jsConcatDir + '*.js')
            .pipe(concat('aggregate.js'))
            .pipe(gulp.dest(outputDir + '/assets/js/'))
    });

    gulp.watch(jsConcatDir + '*js', gulp.series('concatJsFiles'));
}