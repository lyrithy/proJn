const express = require('express');
var router = express.Router();

//todo: setup firebae configuration:
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
  
//todo: homepage for searching place:
router.get('/', (req,res) =>{
    console.log("get running...");
    // var leadsRef = firebase.database().ref('locations');
    // var country=[];
    // var city=[];
    
    // leadsRef.on('value', function(snapshot) {
    //     snapshot.forEach(function(childSnapshot) {
    //       var childData = childSnapshot.val();
    //       var tmpCountry = "";
    //       var tmpCity = "";
    //       if (tmpCountry.toString().trim() != childData.country.toString().trim()){
    //         country.push({country:childData.country});
    //         tmpCountry = childData.country;
    //         console.log(tmpCountry.toString());
    //         console.log("-------------------");
    //         console.log(childData.country.toString());
    //       }
    //       if (tmpCity != childData.city){            
    //         tmpCity = childData.city;
    //         city.push({city:childData.city});
    //       }                    
    //     });
        
    // });


    

    res.render('location/search',
    {
        viewTitle: "Search attractive places"
        // ,country:country
        // ,city:city
    });
})

//
router.post('/locations', (req,res) =>{
    console.log("post running...");
    var leadsRef = firebase.database().ref('locations');
    var list=[];
    leadsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          if (req.body.city == childData.city)
          {


            console.log(childData.place);
            for(var val in childData.place){
                if ((childData.place[val].price <= req.body.price || req.body.price == "") && childData.place[val].category == req.body.category){
                    console.log(childData.place[val].title);
                    var tmp={city:req.body.city, title:childData.place[val].title
                            , category:childData.place[val].category, price:childData.place[val].price
                            , viewTitle:childData.place[val].summary}
                    list.push(tmp); 
                }                
            }            
          }
          
          console.log(list);
        });
        
    });
    res.render("location/list",{list:list})
})


function getData(req,res){
  
}


































router.get('/init', (req,res) =>{
    console.log("init running...");
    //firebase.database().ref('/TestMessages').set({TestMessage: 'GET Request2'});
    firebase.database().ref('/locations').remove();
   
    firebase.database().ref('locations/Brno').set({
        country: "Czech Republic",
        city: "Brno",
        place: [
            {
                title : "Špilberk Castle",
                category : "Art",
                summary : "Špilberk Castle is a castle on the hilltop in Brno, Southern Moravia. Its construction began as early as the first half of the 13th century by the P?emyslid kings and complete by King Ottokar II of Bohemia.",
                address: "Špilberk 210/1, 662 24 Brno",
                open: "Tue-Sun",
                hour: "09:00 - 17:00",
                price: 50,
                phone: "542 123 611",
                email: "muzeum.brno@spilberk.cz",
                images: "database_images/spilberk_castle.jpg",
                latitude: 49.194695, 
                longitude: 16.600027
            },
            {
                title : "Villa Tugendhat",
                category : "Art",
                summary : "Villa Tugendhat is a historical building in the wealthy neighbourhood of ?erná Pole in Brno, Czech Republic. It is one of the pioneering prototypes of modern architecture in Europe, and was designed by the German architect Ludwig Mies van der Rohe.",
                address: " ?ernopolní 45, 613 00 Brno",
                open: "Tue-Sun",
                hour: "10:00 - 18:00",
                price: 50,
                phone: "515 511 015",
                email: "info (at) tugendhat.eu",
                images: "database_images/villa_tugendhat.jpg",
                latitude: 49.207276, 
                longitude: 16.616175
            },
            {
                title : "Anthropos Pavilion",
                category : "Art",
                summary : "Anthropos is a museum located in the city of Brno, South Moravia, Czech Republic. The museum is a part of the Moravské zemské muzeum. It focuses on exhibitions presenting the oldest history of Europe and mankind.",
                address: "Pisárecká 273/5, 603 00 Brno-st?ed-Pisárky",
                open: "Tue-Sun",
                hour: "10:00 - 18:00",
                price: 200,
                phone: "515 919 760",
                email: "mzm@mzm.cz",
                images: "database_images/Anthropos_Pavilion.jpg",
                latitude: 49.192246,
                longitude: 16.567403
            },
            {
                country: "Czech Republic",
                city: "Brno",
                title : "Bílá Hora",
                category : "Sport",
                summary : "Bílá hora in Brno is a hill (300 m above sea level) in Šlapanická pahorkatina, located above the former village of Juliánov , in the city ??district of Brno-Židenice , in the cadastral area of Židenice , covered with forest-type vegetation .",
                address: "Bílá hora Juliánov, 636 00 Brno-Židenice",
                open: "Mon-Sun",
                hour: "08:00 - 00:00",
                price: 150,
                phone: "",
                email: "",
                images: "database_images/Bila_hora.jpg",
                latitude: 49.193664, 
                longitude: 16.660155
            }
        ]
        
    });
    
    firebase.database().ref('locations/Prague').set({
        country: "Czech Republic",
        city: "Prague",
        place: [
            {
                title : "Prague Castle",
                category : "Art",
                summary : "Located in Prague's Hradcany neighborhood, Prague Castle (Pražský hrad), once the home of Bohemia's kings, is today the official residence of the Czech Republic's President and one of the city's most visited tourist attractions.",
                address: "Hrad?any, 119 08 Prague 1",
                open: "Mon-Sun",
                hour: "09:00 - 17:00",
                price: 350,
                phone: "224 373 368",
                email: " info@hrad.cz",
                images: "database_images/Prague_castle.jpg",
                latitude: 50.091286, 
                longitude: 14.402028
            },
            {
                title : "Charles Bridge",
                category : "Art",
                summary: "Charles Bridge is a historic bridge that crosses the Vltava river in Prague, Czech Republic. Its construction started in 1357 under the auspices of King Charles IV, and finished in the beginning of the 15th century.",
                address: "Karl?v most, 110 00 Praha 1",
                open: "Mon-Sun",
                hour: "",
                price: 100,
                phone: "",
                email: "",
                images: "Charles_bridge.jpg",
                latitude: 50.086650,
                longitude: 14.411901
            }
        ]
        
    });

 })
 

//rendering to the detail
 router.get('/:id', (req,res) =>{
    
})
module.exports = router;