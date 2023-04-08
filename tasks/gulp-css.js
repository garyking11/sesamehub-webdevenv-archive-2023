// modules
const gulp = require('gulp');
const fs = require("fs");
const path = require('path');
const concat = require('gulp-concat');

function collectCss(cb) {
    const markupFile = path.resolve(__dirname, '..', 'dashboard/data/markup-data.json');
    const markup = JSON.parse(fs.readFileSync(markupFile, 'utf8'));

    /**
     * Get values
     */
    const page_layout = markup.formData.map(d => {
        switch (d.name) {
            case 'Spotlight': return d.spotlight_layout_style;
            case 'Hero': return d.slideshow_layout_style;
            case 'Services': return d.services_layout_style;
            case 'Content': return d.content_layout_style;
            case 'Testimonial_Rotator': return d.testimonial_rotator_layout_style;
            case 'Association_Logos': return d.assn_logo_layout_style;
            case 'Spotlight_Image_Flip': return d.spotlight_flip_layout_style;
        }
    });

    const siteContext = JSON.parse(fs.readFileSync('./dashboard/data/site-context.json', 'utf8'));
    const cssPreprocessor = siteContext.css_preprocessor;
    const temp = path.resolve(__dirname, '..', 'dashboard/buildkits/resources/css-resources/01-css-temp');
    const src = path.resolve(__dirname, '..', 'dashboard/buildkits/resources/css-resources/css-files');

    page_layout.map((pl, idx) => {
        try {
            const from = path.resolve(src, pl + '.' + cssPreprocessor);
            const to = path.resolve(temp, idx.toString().padStart(2, '0') + '-' + pl + '.' + cssPreprocessor);
            fs.copyFileSync(from, to);
        } catch (e) {
            console.error(e);
        }
    });

    cb();
}

/**
 * Concat the css files to account-name-buildkit directory
 * @param cb
 */
function concatCss(cb) {
    const siteContext = JSON.parse(fs.readFileSync('./dashboard/data/site-context.json', 'utf8'));
    const account = siteContext.account;
    const cssPreprocessor = siteContext.css_preprocessor;
    const cssResources = path.resolve(__dirname, '..', 'dashboard/buildkits/resources/css-resources');
    const dest = path.resolve(__dirname, '..', account, 'www/assets/css')
    const cssConfigFiles = path.resolve(__dirname, '..', 'dashboard/buildkits/resources/');
    gulp.src([
        path.resolve(cssConfigFiles, 'config/css-config.less'),
        path.resolve(cssResources, 'css-files/base.' + cssPreprocessor),
        path.resolve(cssResources, 'css-files/masthead.' + cssPreprocessor),
        path.resolve(cssResources, '01-css-temp', '*'),
        path.resolve(cssResources, 'css-files/footer.' + cssPreprocessor),
        path.resolve(cssResources, 'css-files/superlatives.' + cssPreprocessor)
    ])
        .pipe(concat('local.' + cssPreprocessor))
        .pipe(gulp.dest(dest))
        .on('error', console.log.bind(console));
console.log(dest);
    cb();
}

module.exports = {
    collectCss,
    concatCss
};
