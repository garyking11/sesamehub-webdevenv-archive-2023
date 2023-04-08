const fs = require('fs');
const path = require('path');
const gulp = require('gulp');

function copyProject(cb) {
    const siteContext = JSON.parse(fs.readFileSync('./dashboard/data/site-context.json', 'utf8'));
    const account = siteContext.account;
    const src = path.resolve(__dirname, '..', 'dashbaord/buildkits/resources', `${account}-buildkit`, '**');
    const dest = path.resolve(__dirname, '..', account);

    gulp.src(src)
        .pipe(gulp.dest(dest));

    cb();
}

module.exports = {
    copyProject
}