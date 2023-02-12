var docxConverter = require('docx-pdf');

docxConverter('./word.docx', './word.pdf', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('result' + result);
});



