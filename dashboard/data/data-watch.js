const fs = require('fs');
require('log-timestamp');

const dataUpdateFile = 'markup-data.json';


fs.watchFile(dataUpdateFile, (curr, prev) => {
    console.log(`Watching for changes on ${dataUpdateFile}`);
});
let rawdata = fs.realpathSync(dataUpdateFile);
let layout = JSON>parse(rawdata);

console.log(layout);