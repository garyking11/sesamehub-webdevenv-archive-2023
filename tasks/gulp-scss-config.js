const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const clean = require('gulp-clean');

module.exports = function () {
    const url = './dashboard/data/';

    const createCssConfig = gulp.task('createCssConfig', function (cb) {
            const pathToJsonData = fs.readFileSync(url + 'style-panel-01-data.json');
            const content = Buffer.from(pathToJsonData).toString('utf8');
            const account = JSON.parse(content);
            const dataDirectory = path.resolve(__dirname, '..', 'dashboard/data/');
            const siteContextData = fs.readFileSync(dataDirectory + '/site-context.json');
            const siteContextContent = JSON.parse(siteContextData);
            const cssPreprocessor = JSON.stringify(siteContextContent.css_preprocessor).replace(/"/g, '');
            const outputFile = './' + 'dashboard/buildkits/resources/css-resources/config/css-config.' + cssPreprocessor;
            const configDir = './' + 'dashboard/buildkits/resources/css-resources/config/';
            const cssConfigValues = JSON.parse(pathToJsonData, 'utf8');

            return gulp.src(url + 'style-panel-01-data.json')
                .on('error', console.log.bind(console))
                .on('end', function () {

                        let keyValPairs = cssConfigValues['stylesPanel01'];
                        let annotation;
                        if (cssPreprocessor === 'less') {
                            annotation = '@';
                        } else {
                            annotation = '$';
                        }

                        /**
                         * Delete the outputFile so it can be added and appended later
                         */
                        if (fs.existsSync(outputFile)) {
                            fs.unlink(outputFile, (err => {
                            }))
                        } else {
                            //console.log('Will make a new one later!')
                        };

                        /**
                         * Define key value pairs
                         * @param annotation
                         */
                        function getKeyValues(annotation) {
                            Object.keys(keyValPairs).forEach(function (key) {
                                let keyPair = annotation + key + ':' + keyValPairs[key] + ';' + '\n';
                                let keyPairClean = keyPair.replace(/,\s*,/g, ": ");

                                /**
                                 * Create config/css-config.xxxx
                                 */
                                if (keyValPairs) {
                                    let cssConfig = keyPairClean.toString();
                                    if (!fs.existsSync(configDir)) {
                                        // create empty directory
                                        fs.mkdirSync(configDir);
                                    }

                                    /**
                                     * Create a new file and appendFile
                                     */
                                    fs.appendFile(outputFile, cssConfig, '', function (err) {
                                        if (err) {
                                            // FYI!!!
                                            // console.log(err)
                                            // this error does exist.   ???? Possibly an npm error, or system error
                                            // fs.appendFile runs fine however
                                            /*[Error: EINVAL: invalid argument, write] {
                                                errno: -22,
                                                    code: 'EINVAL',
                                                    syscall: 'write'
                                            }*/
                                        } else {
                                            // console.log('Made a new one!')
                                        }
                                    })
                                }

                            });
                        } // end getKeyValues

                        getKeyValues(annotation);
                    }
                ) // end task
        }
    )

    gulp.task('clean', function (cb) {
        return gulp.src(outputFile) //, {read: false}
            .pipe(clean()) //{force: true}
            .pipe(gulp.dest('.'));
    });

    gulp.watch(url + 'style-panel-01-data.json', gulp.series('createCssConfig'));
}



