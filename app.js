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
//     defaultLayout:'mainLayout',
//     layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

var locationController = require('./controllers/locationController');

app.set('port',process.env.PORT || 8090);

app.listen(app.get('port'), function () {
    console.log("server start on port : " + app.get('port'));
});


//todo: add controller
app.use('/', locationController);
