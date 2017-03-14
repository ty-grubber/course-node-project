var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

eventRouter.route('/')
    .get(function(req, res) {
        res.send('Hello Events!');
    });
    
eventRouter.route('/event')     //handles /Events/event
    .get(function(req, res) {
        res.send('Hello Single Event!');
    });
    
app.use('/Events', eventRouter);

app.get('/', function (req, res){
   //res.send('Hello World!'); 
   res.render('index', { 
       list: ['first val', '2nd val', '3rd val'], 
       nav: [
           {link: 'Services', text: 'Services'}, 
           {link: 'Portfolio', text: 'Porfolio'},
           {link: 'About', text: 'About'},
           {link: 'Team', text: 'Team'},
           {link: 'Contact', text: 'Contact'},
           {link: 'Events', text: 'Events'}
           ]
   });
});

app.get('/routing', function (req, res){
   res.send('Hello Routing!'); 
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error encountered: ' + err.message);
    } else {
        console.log('The server is running on port: ' + port);
    }
});