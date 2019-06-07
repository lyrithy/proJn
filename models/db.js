const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/traveldb');
};

require("./locationCollection");


// const locations = mongoose.model('locations');

connect()
    .then(async connection =>{
    })
    .catch(e => console.error(e));



 const place_collection = mongoose.model('locations');

 //connect()
 //    .then(async connection =>{
 //        const getLocations = await place_collection.create({
 //            "country": "Czech Repubic",
 //            "city": "Prague",
 //            "places":[{
 //              "title" : "Penzion Attractive",
 //              "category" : "Art",
 //              "summary" : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
 //              "address": "sample address of the place street, zone, code",
 //              "open": "Mon-Fri",
 //              "hour": "08:30 - 16:00",
 //              "price": 100,
 //              "phone": "543 235 031",
 //              "email": "",
 /*              "images": "Hillary_Goldwynn_01_tn.jpg" },
               {
               "title" : "Penzion Attractive",
               "category" : "Sport",
               "summary" : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
               "address": "sample address of the place street, zone, code",
               "open": "Mon-Sun",
               "hour": "08:30 - 16:00",
               "price": 200,
               "phone": "543 235 031",
               "email": "",
               "images": "Hillary_Goldwynn_01_tn.jpg" },
               {
               "title" : "Kutna Hora",
               "category" : "Art",
               "summary" : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
               "address": "sample address of the place street, zone, code",
               "open": "Mon-Fri",
               "hour": "08:30 - 16:00",
               "price": 50,
               "phone": "543 235 031",
               "email": "",
               "images": "Hillary_Goldwynn_01_tn.jpg" }
             ]
           });*/
//         console.log(getLocations);
//     })
//     .catch(e => console.error(e));
