const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const extReplace = require('gulp-ext-replace');
const webp = require('imagemin-webp');
const fs = require("fs");
const url = './dashboard/data/';
const data = fs.readFileSync(url + '/site-context.json');
const content = Buffer.from(data).toString('utf8');
const accountName = JSON.parse(content);
const siteContext = accountName.account;
const imageSrc = './' + siteContext + '/www/assets/images/';
const imageDest = './' + siteContext + '/www/assets/';

// before-after-cycle
gulp.task('convertToWebpBeforeAfterCycle', function (cb) {
    return gulp.src([imageSrc + 'before-after-cycle/*.jpg', imageSrc + 'before-after-cycle/*.jpeg'])
        .pipe(imagemin( [
            webp({
                quality: 80,
                method:2,
                metadata:'none'
            })
        ]))

        .pipe(extReplace('.jpg.webp'))
        .pipe(gulp.dest(imageDest + '00-before-after-cycle-webp/'))
        .on('error', console.log.bind(console));

    cb()
})

// footer
gulp.task('convertToWebpFooter', function (cb) {
    return gulp.src([imageSrc + 'footer/*.jpg', imageSrc + 'footer/*.jpeg'])
        .pipe(imagemin([
            webp({
                quality: 80,
                method:2,
                metadata:'none'
            })
        ]))
        .pipe(extReplace('.jpg.webp'))
        .pipe(gulp.dest(imageDest + '00-footer-webp/'))
        .on('error', console.log.bind(console));

    cb()
})

// office-tour
gulp.task('convertToWebpOfficeTour', function (cb) {
    return gulp.src([imageSrc + 'office-tour/*.jpg', imageSrc + 'office-tour/*.jpeg'])
        .pipe(imagemin( [
            webp({
                quality: 80,
                method:2,
                metadata:'none'
            })
        ]))
        .pipe(extReplace('.jpg.webp'))
        .pipe(gulp.dest(imageDest + '00-office-tour-webp/'))
        .on('error', console.log.bind(console));
    cb()
})

// slideshow
gulp.task('convertToWebpSlideshow', function (cb) {
    return gulp.src([imageSrc + 'slideshow/*.jpg', imageSrc + 'slideshow/*.jpeg'])
        .pipe(imagemin([
            webp({
                quality: 80,
                method:2,
                metadata:'none'
            })
        ]))
        .pipe(extReplace('.jpg.webp'))
        .pipe(gulp.dest(imageDest + '00-slideshow-webp/'))
        .on('error', console.log.bind(console));

    cb()
})

// spotlight
gulp.task('convertToWebpSpotlight', function (cb) {
    return gulp.src([imageSrc + 'spotlight/*.jpg', imageSrc + 'spotlight/*.jpeg'])
        .pipe(imagemin([
            webp({
                quality: 80,
                method:2,
                metadata:'none'
            })
        ]))
        .pipe(extReplace('.jpg.webp'))
        .pipe(gulp.dest(imageDest + '00-spotlight-webp/'))
        .on('error', console.log.bind(console));

    cb()
})

// icons
gulp.task('convertToWebpIcons', function (cb) {
    return gulp.src([imageSrc + 'icons/*.jpg', imageSrc + 'icons/*.jpeg'])
        .pipe(imagemin([
            webp({
                quality: 80,
                method:2,
                metadata:'none'
            })
        ]))
        .pipe(extReplace('.jpg.webp'))
        .pipe(gulp.dest(imageDest + '00-icons-webp/'))
        .on('error', console.log.bind(console));
    cb();
})

// uploads/images
gulp.task('convertToWebpUploads', function (cb) {
    return gulp.src(['./' + siteContext + '/www/assets/uploads/images/*.jpg', './' + siteContext + '/www/assets/uploads/images/*.jpeg'])
        .pipe(imagemin([
            webp({
                quality: 80,
                method:2,
                metadata:'none'
            })
        ]))
        .pipe(extReplace('.jpg.webp'))
        .pipe(gulp.dest(imageDest + '00-uploads-images-webp/'))
        .on('error', console.log.bind(console));
    cb();
})

// images
gulp.task('convertToWebpImages', function (cb) {
    return gulp.src(['./' + siteContext + '/www/assets/images/*.jpg', './' + siteContext + '/www/assets/images/*.jpeg'])
        .pipe(imagemin([
            webp({
                quality: 80,
                method:2,
                metadata:'none'
            })
        ]))
        .pipe(extReplace('.jpg.webp'))
        .pipe(gulp.dest(imageDest + '00-images-webp/'))
        .on('error', console.log.bind(console));
    cb();
})

// watch all images/**
gulp.watch([
    './' + siteContext + '/www/assets/images/before-after-cycle/*',
], gulp.series('convertToWebpBeforeAfterCycle'));

gulp.watch([
    './' + siteContext + '/www/assets/images/footer/*',
], gulp.series('convertToWebpFooter'));

gulp.watch([
    './' + siteContext + '/www/assets/images/office-tour/*'
], gulp.series('convertToWebpOfficeTour'));

gulp.watch([
    './' + siteContext + '/www/assets/images/slideshow/*'
], gulp.series('convertToWebpSlideshow'));

gulp.watch([
    './' + siteContext + '/www/assets/images/spotlight/*'
], gulp.series('convertToWebpSpotlight'));

gulp.watch([
    './' + siteContext + '/www/assets/uploads/images/*'
], gulp.series('convertToWebpUploads'));

gulp.watch([
    './' + siteContext + '/www/assets/images/*'
], gulp.series('convertToWebpImages'));

// unwatched directory
/*gulp.watch([
    './' + siteContext + '/www/assets/images/icons/!*'
], gulp.series('convertToWebpIcons'));*/




module.exports = {}