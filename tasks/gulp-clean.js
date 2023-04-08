const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const del = require('del');

async function cleanProject(cb) {
    const siteContext = JSON.parse(fs.readFileSync('./dashboard/data/site-context.json', 'utf8'));
    const account = siteContext.account;

    /**
     * Clean account-name-buildkit, temp and 01-css-temp directories
     */
    const paths =  await del([
        path.resolve(__dirname, '..', 'dashboard/buildkits/resources/css-resources/01-css-temp', '*'),
        path.resolve(__dirname, '..', 'dashboard/buildkits/resources/temp', '*'),
        path.resolve(__dirname, '..', 'dashboard/buildkits/resources', `${account}-buildkit`, '*')
    ], {
        force: true
    });

    cb();
}

module.exports = {
    cleanProject
}