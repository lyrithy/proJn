const express = require('express');
var router = express.Router();
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
  






//form search
router.get('/', (req,res) =>{
    //res.json('sample text from router locaitons');
    res.render('location/search',
    {
        viewTitle: "search attractive places"
    });
})

//
router.post('/', (req,res) =>{

    var leadsRef = firebase.database().ref('locations');
    var list=[];
    leadsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          
          
          if (childData.city == req.body.city && childData.price <= req.body.price)
          {
            console.log(childData.price + childData.title);
            var tmp={city:childData.city, title:childData.title, category:childData.category, 
                        price:childData.price, viewTitle:childData.summary}
                        list.push(tmp);  
                        //console.log(tmp);                     
          }
        });
        
    });
    //console.log("--------------");
    //console.log(list);
    res.render("location/list",{list:list})
})

function getData(req,res){
  
}

router.get('/init', (req,res) =>{
    console.log("init running...");
    //firebase.database().ref('/TestMessages').set({TestMessage: 'GET Request2'});
    firebase.database().ref('/locations').remove();
   
    firebase.database().ref('locations/place1').set({
            country: "Czech Repubic",
            city: "Brno",            
            title : "Penzion Attractive",
            category : "Art",
            summary : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
            address: "sample address of the place street, zone, code",
            open: "Mon-Fri",
            hour: "08:30 - 16:00",
            price: 100,
            phone: "543 235 031",
            email: ""
    });
    firebase.database().ref('locations/place2').set({
        country: "Czech Repubic",
        city: "Brno",            
        title : "Penzion Attractive",
        category : "Art",
        summary : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
        address: "sample address of the place street, zone, code",
        open: "Mon-Fri",
        hour: "08:30 - 16:00",
        price: 150,
        phone: "543 235 031",
        email: ""
    });
    firebase.database().ref('locations/place3').set({
        country: "Czech Repubic",
        city: "Brno",            
        title : "Penzion Attractive",
        category : "Art",
        summary : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
        address: "sample address of the place street, zone, code",
        open: "Mon-Fri",
        hour: "08:30 - 16:00",
        price: 250,
        phone: "543 235 031",
        email: ""
    });
    firebase.database().ref('locations/place4').set({
        country: "Czech Repubic",
        city: "Brno",            
        title : "Penzion Attractive",
        category : "Art",
        summary : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
        address: "sample address of the place street, zone, code",
        open: "Mon-Fri",
        hour: "08:30 - 16:00",
        price: 100,
        phone: "543 235 031",
        email: ""
    });
    firebase.database().ref('locations/place5').set({
        country: "Czech Repubic",
        city: "Prague",            
        title : "Penzion Attractive",
        category : "Art",
        summary : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
        address: "sample address of the place street, zone, code",
        open: "Mon-Fri",
        hour: "08:30 - 16:00",
        price: 50,
        phone: "543 235 031",
        email: ""
    });
    firebase.database().ref('locations/place6').set({
        country: "France",
        city: "Paris",            
        title : "Penzion Attractive",
        category : "Art",
        summary : "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.",
        address: "sample address of the place street, zone, code",
        open: "Mon-Fri",
        hour: "08:30 - 16:00",
        price: 200,
        phone: "543 235 031",
        email: ""
    });

 })
 

//rendering to the detail
 router.get('/:id', (req,res) =>{
    
})
module.exports = router;