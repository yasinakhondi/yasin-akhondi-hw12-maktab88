const fs = require('fs')
const gm = require('gm').subClass({ imageMagick: true });

// resize and remove EXIF profile data
gm('pic.png')
    .resize(500, 500)

    .write('pic.jpg', function (err) {
        if (err) console.log(err);
        else console.log("ok");
    });