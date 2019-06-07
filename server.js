
// firebase.initializeApp({
//     serviceAccount: "./travelproject-13f423089af9.json",
//     databaseURL: "https://travelproject-fb528.firebaseio.com"
// })




var express = require('express');
var bodyParser = require('body-parser');
var firebase = require('firebase');
var app = express();
app.use(bodyParser.json()); //need to parse HTTP request body

var config = {
  apiKey: "AIzaSyCKjPg0SVPW-ZehsBUSSBOoRTdJbHwq2c8",
  authDomain: "travelproject-fb528.firebaseapp.com",
  databaseURL: "https://travelproject-fb528.firebaseio.com",
  projectId: "travelproject-fb528",
  storageBucket: "travelproject-fb528.appspot.com",
  messagingSenderId: "1009752740041"
};
firebase.initializeApp(config);

app.get('/test', function (req, res) {
  
    console.log("HTTP Get Request");
    res.send("HTTP GET Request");
    //Insert key,value pair to database
    firebase.database().ref('/TestMessages').set({TestMessage: 'GET Request2'});
    
});

app.set('port',process.env.PORT || 8080);

app.listen(app.get('port'), function () {
    console.log("server start on port : " + app.get('port'));
});