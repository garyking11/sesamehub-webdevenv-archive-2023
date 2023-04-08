const path = require('path');
const gulp = require('gulp');
const fs = require("fs");
const concat = require('gulp-concat');

/**
 * Get values
 * @param cb
 */
function collectMarkup(cb) {
    const markupFile = path.resolve(__dirname, '..', 'dashboard/data/markup-data.json');
    const markup = JSON.parse(fs.readFileSync(markupFile, 'utf8'));

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

 /**
  * Copy files
  * @type {string}
  */
    const src =  path.resolve(__dirname, '..', 'dashboard/buildkits/resources/markup');
    const temp = path.resolve(__dirname, '..', 'dashboard/buildkits/resources/temp');

    page_layout.map((pl, idx) => {
        try {
            const from = path.resolve(src, pl + '.php');
            const to = path.resolve(temp, idx.toString().padStart(2, '0') + '-' + pl + '.php');
            fs.copyFileSync(from, to);
        } catch (e) {
            console.error(e);
        }
    });

    cb();
}

/**
 * Concat php files to temp directory
 * @param cb
 */
function concatMarkup(cb) {
    const siteContext = JSON.parse(fs.readFileSync('./dashboard/data/site-context.json', 'utf8'));
    const account = siteContext.account;
    const temp = path.resolve(__dirname, '..', 'dashboard/buildkits/resources/temp');
    const markup = path.resolve(__dirname, '..', 'dashboard/buildkits/resources/markup');
    const config = path.resolve(__dirname, '..', 'dashboard/buildkits/resources/config');
    const dest = path.resolve(__dirname, '..', account, 'www');

    gulp.src([
        path.resolve(config, 'markup-config.php'),
        path.resolve(markup, 'head.php'),
        path.resolve(markup, 'body-open-tag.php'),
        path.resolve(markup, 'masthead.php'),
        path.resolve(temp, '*.php'),
        path.resolve(markup, 'footer.php'),
        path.resolve(markup, 'scripts.php'),
        path.resolve(markup, 'body-close-tag.php')
    ])
        .pipe(concat('layout.php'))
        .pipe(gulp.dest(dest))
        .on('error', console.log.bind(console));

    cb();
}

module.exports = {
    collectMarkup,
    concatMarkup
};
