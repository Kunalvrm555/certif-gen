const express = require('express');    //Express Web Server 
const sendCertificate = require('./certificate.js');    //module for sending certificates 
var app = express();
var fileUpload = require('express-fileupload');
app.use(fileUpload());

/* ========================================================== 
Create a Route (/upload) to handle the Form submission 
(handle POST requests to /upload)
Express v4  Route definition
============================================================ */
app.route('/upload')
    .post(function (req, res) {
        if (!req.files)
            return res.status(400).send('No files were uploaded.');

        // The name of the input field (i.e. "file") is used to retrieve the uploaded file 
        let FileBuffer = req.files.file.data;
        // console.log(FileBuffer);
        sendCertificate(FileBuffer);
        res.sendStatus(200);
    });
var server = app.listen(5000, function () {
    console.log('Listening on port %d', server.address().port);
});