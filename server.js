var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var nodemailer = require('nodemailer');
var credentials = require('./sensitive/credentials.json');

app.use(express.static(__dirname));
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//change to be dynamic
app.listen(5000);

console.log('Running on port 5000...');

app.get('/', function(req, res){
    res.set('Content-Type', 'text/html')
        .sendFile(__dirname + '/src/index.html');
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: credentials.email,
        pass: credentials.password
    }
});

app.post('/contact', function(req, res) {
  if(req.body != null){
    var htmlTpl = '<h4>Message from' + ' ' + req.body["name"] + '</h4><p><span>' + req.body["email"] + '</span</p><p>' + req.body["comments"] + '</p>';

        mailOptions = {
            from: req.body["email"],
            to: credentials.email,
            subject: req.body["subject"] + 'Inquiry',
            html: htmlTpl
        };

        transporter.sendMail(mailOptions, function(error, response) {
            if(error) {
            	res.send({ success: false, message: error });
                console.log(error);
            } else {
            	res.send({ success: true, message: 'Successfully sent e-mail' });
            }
            transporter.close();
        });
  }
  else{
    res.send({ success: false, message: 'Invalid message body.' });
  }
});

app.use('/api', router);
