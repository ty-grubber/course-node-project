var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

var eventsData = [  {
                name: 'Event 1',
                description: 'The First Event',
                date: '2016.01.01',
                time: '1:00pm',
                duration: '1 Hour',
                location: {
                    streetAddr: '101 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                    },
                capacity: 100
                },
                {
                name: 'Event 2',
                description: 'The Second Event',
                date: '2016.02.02',
                time: '2:00pm',
                duration: '2 Hours',
                location: {
                    streetAddr: '222 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                    },
                capacity: 200
                },
                {
                name: 'Event 3',
                description: 'The Third Event',
                date: '2016.03.03',
                time: '3:00pm',
                duration: '3 Hours',
                location: {
                    streetAddr: '333 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                    },
                capacity: 300
                },
                {
                name: 'Event 4',
                description: 'The Fourth Event',
                date: '2016.04.04',
                time: '4:00pm',
                duration: '4 Hours',
                location: {
                    streetAddr: '444 Main St.',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '87885',
                    lon: 0,
                    lat: 0
                    },
                capacity: 400
                }
];

eventRouter.route('/')
    .get(function(req, res) {
        res.render('events', { 
       list: ['first event', '2nd event', '3rd event'], 
       nav: [
           {link: 'Services', text: 'Services'}, 
           {link: 'Portfolio', text: 'Porfolio'},
           {link: 'About', text: 'About'},
           {link: 'Team', text: 'Team'},
           {link: 'Contact', text: 'Contact'},
           {link: 'Events', text: 'Events'}
           ],
        events: eventsData
        });
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