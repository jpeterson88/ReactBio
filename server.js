var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var nodemailer = require('nodemailer');

app.use(express.static(__dirname));
app.use( bodyParser.json());

//change to be dynamic
app.listen(5000);

app.get('/', function(req, res){
    res.set('Content-Type', 'text/html')
        .sendFile(__dirname + '/src/index.html');
});

app.get('/test', function(req, res) {
	res.send('hello world');
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});

router.post('/contact', function(req, res) {
var htmlTpl = '<h4>Message from' + ' ' + req.body.params.name + '</h4><p><span>' + req.body.params.email + '</span</p><p>' + req.body.params.comments + '</p>';

    mailOptions = {
        from: req.body.params.email,
        to: 'jpeter4223@gmail.com',
        subject: req.body.params.subjectList,
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
});

app.use('/api', router);
