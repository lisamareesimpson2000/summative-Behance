const express = require('express');
const path = require('path'); //to define path
// const config = require('./config'); //keys are stored here

const app = express();

// var key = config;



app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use(express.static('./public'));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});


// app.post();

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function(){
    console.log('Server is running on port '+app.get('port'));
});
