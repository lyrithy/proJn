const mongoose = require('mongoose');
mongoose.set('debug', true);
//define collection schema:
var locations = new mongoose.Schema({
    country: String,
    city:String,
    places: [
        {   title : String,
            category: String,
            summary: String,
            address: String,
            hour: String,
            price: Number,
            phone: String,
            email: String,
            images: String,
            latitude: Number,
            longitude: Number
        }
    ]
});

//assign collection to mongodb:
//mongoose.model('locations', location);
mongoose.model( "locations", locations, "locations" );