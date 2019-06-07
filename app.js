var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyCKjPg0SVPW-ZehsBUSSBOoRTdJbHwq2c8",
  authDomain: "travelproject-fb528.firebaseapp.com",
  databaseURL: "https://travelproject-fb528.firebaseio.com",
  projectId: "travelproject-fb528",
  storageBucket: "travelproject-fb528.appspot.com",
  messagingSenderId: "1009752740041"
};
firebase.initializeApp(config);

require("./models/db");
const express = require('express');
const app = express();

const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());

app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine','hbs');



app.get('/', function (req, res) {
  
    console.log("HTTP Get Request");
    res.send("HTTP GET Request");
    //Insert key,value pair to database
    firebase.database().ref('/TestMessages').set({TestMessage: 'GET Request'});
    
  });


const locationController = require('./controllers/locationController');

app.set('port',process.env.PORT || 3300);

app.listen(app.get('port'), function () {
    console.log("server start on port : " + app.get('port'));
});


//todo: add controller
app.use('/locations', locationController);