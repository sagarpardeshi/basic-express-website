var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render(
        'contact',
        {
            title: 'Contact',
            message: 'Welcome to our about page.'
        }
    );
});

router.post('/send', function (req, res, next) {
    var demo = process.env.SMTP_USERNAME;
    var transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    });

    var mailOptions = {
        from: 'Green Gottlieb <green.gottlieb35@ethereal.email>',
        to: 'coding010@gmail.com',
        subject: 'Website Submission',
        text: 'You have a new submission with the following details...Name ' + req.body.name + ' Email ' + req.body.email + ' Message ' + req.body.message,
        html: '<p>You got a new submission whth the following details</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('message Sent: ' + info.response);
            res.redirect('/');
        }
    });

});

module.exports = router;
