var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user@gmail.com:myPass@smtp.gmail.com');
// make sure you turn off google 2-step verification
// change user@gmail.com to your g-mail address
// change myPass to your g-mail password

// when using AWS
var transporterAws = nodemailer.createTransport(smtpTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 465,
    secure: true,
    auth: {
        user: aws_smtp_user,
        pass: aws_smtp_pw
    }
}));

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Sender" <user@gmail.com>', // sender address
    to: 'user@gmail.com, user2@gmail.com', // list of receivers. u can also add more receivers separated by comma
    subject: 'Hello ✔', // Subject line
    text: 'Hello there ?', // plaintext body
    html: '<b>Nice to meet you ♥</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
