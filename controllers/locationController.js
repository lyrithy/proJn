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
    res.render('location/search',
    {
        viewTitle: "Search attractive places"
    });
})

//
router.post('/', (req,res) =>{
    console.log("post running...");
    var leadsRef = firebase.database().ref('locations');
    var list=[];
    console.log("city: " + req.body.city);
    var i = 0;
    leadsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          if (req.body.city == childData.city)
          {            
            for(var val in childData.place){
                if ((childData.place[val].price <= req.body.price || req.body.price == "") && childData.place[val].category == req.body.category){
                    //console.log(childData.place[val].title);
                    var tmp={city:req.body.city, title:childData.place[val].title
                            , category:childData.place[val].category, price:childData.place[val].price
                            , viewTitle:childData.place[val].summary}
                    list.push(tmp); 
                }                
            }            
          }
          
          
        });
        i = i + 1;
        console.log("in list : " + list);
        console.log("in I : " + i);
        res.render("location/list",{list:list})
    });
    console.log("out list : " + list);
    
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
            },
            {
                title : "Královka sports Hall",
                category : "Sport",
                summary : "Královka Arena or Královka sports Hall is multipurpose hall located in Prague 7 district Letná, near to the Generali Arena. Sports and cultural events are held there. It has capacity for maximum 2500 people, 1300 without additional tribune. It can host sports as basketball, badminton or floorball.",
                address: "Nad Královskou oborou 1080/51, 170 00 Praha 7-Bubene?",
                open: "Mon-Sun",
                hour: "09:00 - 22:00",
                price: 140,
                phone: "602 349 060",
                email: "orders@sapraha.cz",
                images: "database_images/Královka_hall.jpg",
                latitude: 50.101521, 
                longitude: 14.417124
            }
            
        ]
        
    });

    firebase.database().ref('locations/Bratislava').set({
        country: "Slovakia",
        city: "Bratislava",
        place: [
            {
                title : "Bratislava Castle",
                category : "Art",
                summary : "Bratislava Castle is the main castle of Bratislava, the capital of Slovakia. The massive rectangular building with four corner towers stands on an isolated rocky hill of the Little Carpathians directly above the Danube river in the middle of Bratislava.",
                address: "Hrad, 811 06 Bratislava, Slovakia",
                open: "Mon-Sun",
                hour: "09:00 - 17:00",
                price: 258,
                phone: "+421 2/544 114 44",
                email: "bratislavskyhrad@snm.sk",
                images: "database_images/Bratislava_Castle.jpg",
                latitude: 48.142318, 
                longitude: 17.100563
            },
            {
                title : "Michael's Gate",
                category : "Art",
                summary : "In Bratislava, Slovakia, Michael's Gate is the only city gate that has been preserved of the medieval fortifications and ranks among the oldest town buildings.",
                address: "Michalská ulica 22 806/24, 811 03 Bratislava, Slovakia",
                open: "Tue-Sun",
                hour: "10:00 - 17:00",
                price: 116,
                phone: "+421 2/544 330 44",
                email: "mmba@bratislava.sk",
                images: "database_images/Michael´s_Tower.jpg",
                latitude: 48.145159, 
                longitude: 17.106768
            },
            {
                title : "SNP Museum",
                category : "Art",
                summary : "The SNP Museum is located in a building that is quite unusual from the architectural point of view - it was built in 1969 as a SNP Monument.  It is set in a park that also features an open-air museum of military hardware used during the SNP. ",
                address: "Kapitulská 282/23, 974 01 Banská Bystrica, Slovakia",
                open: "Tue-Sun",
                hour: "09:00 - 16:00",
                price: 350,
                phone: " +421 48/412 32 58",
                email: "muzeumsnp@muzeumsnp.sk",
                images: "database_images/SNP_museum.jpg",
                latitude: 48.735380, 
                longitude: 19.149849
            }
            
        ]
        
    });

    firebase.database().ref('locations/Berlin').set({
        country: "Germany",
        city: "Berlin",
        place: [
            {
                title : "Brandenburg Gate",
                category : "Art",
                summary : "The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the successful restoration of order during the early Batavian Revolution.",
                address: "Pariser Platz, 10117 Berlin, Germany",
                open: "Mon-Sun",
                hour: "24Hours",
                price: 0,
                phone: "-",
                email: "-",
                images: "database_images/Brandenburg_Gate.jpg",
                latitude:52.516461, 
                longitude:13.377736
            },
            {
                title : "East Side Gallery",
                category : "Art",
                summary : "The East Side Gallery is an open-air gallery in Berlin. It consists of a series of murals painted directly on a 1316 m long remnant of the Berlin Wall, located near the centre of Berlin, on Mühlenstraße in Friedrichshain-Kreuzberg. The gallery has official status as a Denkmal, or heritage-protected landmark.",
                address: "Mühlenstraße 3-100, 10243 Berlin, Germany",
                open: "Mon-Sun",
                hour: "24Hours",
                price: 322,
                phone: "+49 30 2517159",
                email: "info@eastsidegallery-berlin.com",
                images: "database_images/East_side_gallery.jpg",
                latitude: 52.505067, 
                longitude:13.439692
            },
            {
                title : "Memorial to the Murdered Jews of Europe",
                category : "Art",
                summary : "The Memorial to the Murdered Jews of Europe, also known as the Holocaust Memorial, is a memorial in Berlin to the Jewish victims of the Holocaust, designed by architect Peter Eisenman and engineer Buro Happold. ",
                address: "Cora-Berliner-Straße 1, 10117 Berlin, Germany",
                open: "Tue-Sun",
                hour: "10:00 - 20:00",
                price: 78,
                phone: "+49 30 2639430",
                email: "info@stiftung-denkmal.de",
                images: "database_images/Memorial_Berlin.jpg",
                latitude: 52.513999, 
                longitude: 13.378713
            }
            
        ]
        
    });

    firebase.database().ref('locations/Potsdam').set({
        country: "Germany",
        city: "Potsdam",
        place: [
            {
                title : "Sanssouci Park",
                category : "Sport",
                summary : "Sanssouci Park is a large park surrounding Sanssouci Palace in Potsdam, Germany. Following the terracing of the vineyard and the completion of the palace, the surroundings were included in the structure. A baroque flower garden with lawns, flower beds, hedges and trees was created. ",
                address: "Zur Historischen Mühle 1, 14469 Potsdam, Germany",
                open: "Mon-Sun",
                hour: "08:00 - 20:00",
                price: 0,
                phone: "+49 331 9694200",
                email: "mailto:info@spsg.de",
                images: "database_images/Sanssouci_Park.jpg",
                latitude: 52.403343, 
                longitude: 13.029560
            },
            {
                title : "Marienplatz",
                category : "Sport",
                summary : "Marienplatz is a central square in the city centre of Munich, Germany. It has been the city's main square since 1158. ",
                address: "Marienplatz 1, 80331 München, Germany",
                open: "Mon-Sat",
                hour: "10:00 - 20:00",
                price: 0,
                phone: "-",
                email: "-",
                images: "database_images/Marienplatz.jpg",
                latitude: 48.137433, 
                longitude: 11.575442
            },
            {
                title : "Nymphenburg Palace",
                category : "Art",
                summary : "The Nymphenburg Palace, i. e., Castle of the Nymph, is a Baroque palace in Munich, Bavaria, southern Germany. The palace was the main summer residence of the former rulers of Bavaria of the House of Wittelsbach. ",
                address: "Schloß Nymphenburg 1, 80638 München, Germany",
                open: "Mon-Sun",
                hour: "09:00 - 18:00",
                price: 100,
                phone: "+49 89 179080",
                email: "www.schloesser.bayern.de",
                images: "database_images/Nymphenburg_Palace.jpg",
                latitude: 48.158367, 
                longitude: 11.503350
            }
            
        ]
        
    });

    firebase.database().ref('locations/Munich').set({
        country: "Germany",
        city: "Munich",
        place: [
            {
                title : "Olympiapark",
                category : "Sport",
                summary : "The Olympiapark München in Munich, Germany, is an Olympic Park which was constructed for the 1972 Summer Olympics. Located in the Oberwiesenfeld neighborhood of Munich, the Park continues to serve as a venue for cultural, social, and religious events, such as events of worship. It includes a contemporary carillon.",
                address: "Spiridon-Louis-Ring 21, 80809 München, Germany",
                open: "Mon-Sun",
                hour: "24Hours",
                price: 500,
                phone: "+49 89 30670",
                email: "info@olympiapark.de",
                images: "database_images/Olympiapark.jpg",
                latitude: 48.175496, 
                longitude: 11.551791
            }
            
        ]
        
    });
    
    firebase.database().ref('locations/Frankfrut').set({
        country: "Germany",
        city: "Frankfrut",
        place: [
            {
                title : "Römer",
                category : "Art",
                summary : "The Römer is a medieval building in the Altstadt of Frankfurt am Main, Germany, and one of the city's most important landmarks. The Römer is located opposite the Old St. Nicholas church and has been the city hall of Frankfurt for over 600 years.",
                address: " Römerberg 23, 60311 Frankfurt am Main, Germany",
                open: "Mon-Sun",
                hour: "24Hours",
                price: 0,
                phone: "+49 69 21201",
                email: "info@infofrankfurt.de",
                images: "database_images/Römer.jpg",
                latitude: 50.110492, 
                longitude:8.682153
            },
            {
                
                title : "Palmengarten",
                category : "Art",
                summary : "The Palmengarten is one of three botanical gardens in Frankfurt am Main, Germany. It is located in the Westend-Süd district. It covers a surface of 22 hectares. Like many public sites in Frankfurt, it was privately financed and implemented by the architect Heinrich Siesmayer.",
                address: "Siesmayerstraße 61, 60323 Frankfurt am Main, Germany",
                open: "Mon-Sun",
                hour: "09:00 - 18:00",
                price: 200,
                phone: "+49 69 21239111",
                email: "info.palmengarten@stadt-frankfurt.de",
                images: "database_images/Palmengarten.jpg",
                latitude: 50.123182, 
                longitude: 8.657832
            }            
        ]
        
    });

    firebase.database().ref('locations/Cologne').set({
        country: "Germany",
        city: "Cologne",
        place: [
            {                
                title : "Cologne Cathedral",
                category : "Art",
                summary : "Cologne Cathedral is a Catholic cathedral in Cologne, North Rhine-Westphalia, Germany. It is the seat of the Archbishop of Cologne and of the administration of the Archdiocese of Cologne. It is a renowned monument of German Catholicism and Gothic architecture and was declared a World Heritage Site in 1996.",
                address: "Domkloster 4, 50667 Köln, Germany",
                open: "Mon-Sun",
                hour: "06:00 - 21:00",
                price: 0,
                phone: "+49 221 17940555",
                email: "-",
                images: "database_images/Cologne_Cathedral.jpg",
                latitude: 50.941443, 
                longitude: 6.958352
            },
            {
                title : "Phantasialand",
                category : "Sport",
                summary : "Phantasialand is a theme park in Brühl, North Rhine-Westphalia, Germany that attracts approximately 1.75 million visitors annually. The park was opened in 1967 by Gottlieb Löffelhardt and Richard Schmidt.",
                address: "Berggeiststraße 31-41, 50321 Brühl, Germany",
                open: "Mon-Sun",
                hour: "09:00 - 18:00",
                price: 2000,
                phone: "+49 2232 36600",
                email: "shop[at]phantasialand.de",
                images: "database_images/Phantasialand.jpg",
                latitude: 50.801568,
                longitude: 6.876547
                
            },
            {
                title : "Cologne Zoological Garden",
                category : "Sport",
                summary : "The Aktiengesellschaft Cologne Zoological Garden is the zoo of Cologne, Germany. It features over 10,000 animals of more than 850 species on more than 20 hectares.",
                address: "Riehler Str. 173, 50735 Köln, Germany",
                open: "Mon-Sun",
                hour: "09:00 - 18:00",
                price: 502,
                phone: "+49 221 56799100",
                email: "INFO@KOELNERZOO.DE",
                images: "database_images/Cologne_Zoo.jpg",
                latitude: 50.959828, 
                longitude: 6.973955
            }           
        ]
        
    });
    
    firebase.database().ref('locations/Brugge').set({
        country: "Belgium",
        city: "Brugge",
        place: [
            {                
                title : "Belfry of Bruges",
                category : "Art",
                summary : "The Belfry of Bruges is a medieval bell tower in the centre of Bruges, Belgium. One of the city's most prominent symbols, the belfry formerly housed a treasury and the municipal archives, and served as an observation post for spotting fires and other danger. ",
                address: "Markt 7, 8000 Brugge, Belgium",
                open: "Mon-Sun",
                hour: "09:30 - 18:00",
                price: 385,
                phone: "+32 50 44 87 43",
                email: "toerisme@brugge.be",
                images: "database_images/Belfry_of_Bruges.jpg",
                latitude: 51.208309, 
                longitude: 3.224780
            },
            {
                title : "Sint-Salvatorskathedraal",
                category : "Art",
                summary : "The Saint-Salvator Cathedral is the cathedral of Bruges, Flanders, in present-day Belgium. The cathedral is dedicated to the Verrezen Zaligmaker and Saint-Donatius of Reims.",
                address: "Sint-Salvatorskoorstraat 8, 8000 Brugge, Belgium",
                open: "Mon-Sun",
                hour: "09:00 - 18:00",
                price: 0,
                phone: "+32 50 33 68 41",
                email: "-",
                images: "database_images/Sint-Salvatorskathedraal.jpg",
                latitude: 51.205528, 
                longitude: 3.221622
                                
            }   
        ]
        
    });

    firebase.database().ref('locations/Amsterdam').set({
        country: "Holland",
        city: "Amsterdam",
        place: [
            {                
                
                title : "Van Gogh Museum",
                category : "Art",
                summary : "The Van Gogh Museum is one of the many art museums in the Netherlands dedicated to the works of Vincent van Gogh and his contemporaries in Amsterdam in the Netherlands. The Van Gogh House can be visited in Zundert, a museum in Van Gogh's old residence. ",
                address: "Museumplein 6, 1071 DJ Amsterdam, Netherlands",
                open: "Mon-Sun",
                hour: "09:00 - 18:00",
                price: 499,
                phone: "+31 20 570 5200",
                email: "info@vangoghmuseum.nl",
                images: "database_images/Van_Gogh_Museum.jpg",
                latitude: 52.358476,
                longitude: 4.881157
            },
            {
                
                title : "Anne Frank House",
                category : "Art",
                summary : "The Anne Frank House is a writer's house and biographical museum dedicated to Jewish wartime diarist Anne Frank. The building is located on a canal called the Prinsengracht, close to the Westerkerk, in central Amsterdam in the Netherlands.",
                address: "Prinsengracht 263-267, 1016 GV Amsterdam, Netherlands",
                open: "Mon-Sun",
                hour: "09:00 - 22:00",
                price: 258,
                phone: "+31 20 556 7105",
                email: "-",
                images: "database_images/Anne_Frank_House.jpg",
                latitude: 52.375521, 
                longitude: 4.884036
                                
            }   
        ]
        
    });
    firebase.database().ref('locations/Roma').set({
        country: "Italy",
        city: "Roma",
        place: [
            {                
                title : "Colosseum",
                category : "Art",
                summary : "The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine, tuff, and brick-faced concrete, it is the largest amphitheatre ever built. The Colosseum is situated just east of the Roman Forum.",
                address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
                open: "Mon-Sun",
                hour: "08:30 - 19:00",
                price: 464,
                phone: "+39 06 3996 7700",
                email: "-",
                images: "database_images/Colosseum.jpg",
                latitude: 41.890470,
                longitude: 12.492636
            },
            {
                title : "Roman Forum",
                category : "Sport",
                summary : "The Roman Forum, also known by its Latin name Forum Romanum, is a rectangular forum surrounded by the ruins of several important ancient government buildings at the center of the city of Rome. Citizens of the ancient city referred to this space, originally a marketplace, as the Forum Magnum, or simply the Forum. ",
                address: "Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy",
                open: "Mon-Sun",
                hour: "09:00 - 19:00",
                price: 1261,
                phone: "+39 06 0608",
                email: "-",
                images: "database_images/Roman_Forum.jpg",
                latitude: 41.892699, 
                longitude: 12.485698                                
            },
            {                
                title : "Piazza Navona",
                category : "Art",
                summary : "Piazza Navona is a square in Rome, Italy. It is built on the site of the Stadium of Domitian, built in the 1st century AD, and follows the form of the open space of the stadium. The ancient Romans went there to watch the agones, and hence it was known as Circus Agonalis ",
                address: "Piazza Navona, 00186 Roma RM, Italy",
                open: "Mon-Sun",
                hour: "24Hours",
                price: 0,
                phone: "-",
                email: "-",
                images: "database_images/Piazza_Navona.jpg",
                latitude: 41.899454, 
                longitude: 12.473387
            }
        ]        
    });

    firebase.database().ref('locations/Barcelona').set({
        country: "Spain",
        city: "Barcelona",
        place: [
            {                
                
                title : "La Sagrada Familia",
                category : "Art",
                summary : "The Temple Expiatori de la Sagrada Família is a large unfinished Roman Catholic church in Barcelona. Designed by Catalan architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site. In November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica. ",
                address: "Carrer de Mallorca, 401, 08013 Barcelona, Spain",
                open: "Mon-Sun",
                hour: "09:00 - 19:00",
                price: 438,
                phone: "+34 932 08 04 14",
                email: "-",
                images: "database_images/La_Sagrada_Familia.jpg",
                latitude: 41.403767, 
                longitude: 2.174665
            },
            {

                title : "Cathedral of Barcelona",
                category : "Art",
                summary : "The Cathedral of the Holy Cross and Saint Eulalia, also known as Barcelona Cathedral, is the Gothic cathedral and seat of the Archbishop of Barcelona, Catalonia, Spain. The cathedral was constructed from the thirteenth to fifteenth centuries, with the principal work done in the fourteenth century.",
                address: "Pla de la Seu, s/n, 08002 Barcelona, Spain",
                open: "Mon-Sun",
                hour: "06:00 - 19:00",
                price: 0,
                phone: "+34 933 15 15 54",
                email: "-",
                images: "database_images/Cathedral_of_Barcelona.jpg",
                latitude: 41.384144, 
                longitude: 2.176820
                                
            },
            {     

                country: "Spain",
                city: "Barcelona",
                title : "Camp Nou",
                category : "Sport",
                summary : "Camp Nou is the home stadium of FC Barcelona since its completion in 1957. With a seating capacity of 99,354, it is the largest stadium in Spain and Europe, and the third largest football stadium in the world in capacity.",
                address: "C. d'Arístides Maillol, 12, 08028 Barcelona, Spain",
                open: "Mon-Sun",
                hour: "24Hours",
                price: 2300,
                phone: "+34 902 18 99 00",
                email: "oab@fcbarcelona.cat",
                images: "database_images/Camp_nou.jpg",
                latitude: 41.381032,
                longitude: 2.122842
            }
        ]
        
    });
    
    firebase.database().ref('locations/Wien').set({
        country: "Austria",
        city: "Wien",
        place: [
            {                
                
                title : "Schönbrunn Palace",
                category : "Art",
                summary : "Schönbrunn Palace was the main summer residence of the Habsburg rulers, located in Hietzing, Vienna. The 1,441-room Baroque palace is one of the most important architectural, cultural, and historical monuments in the country. Since the mid-1950s it has been a major tourist attraction.",
                address: " Schönbrunner Schloßstraße 47, 1130 Wien, Austria",
                open: "Mon-Sun",
                hour: "08:00 - 17:00",
                price: 412,
                phone: "+43 1 81113239",
                email: "info@schoenbrunn.at",
                images: "database_images/Schönbrunn_Palace.jpg",
                latitude: 48.185918, 
                longitude: 16.313101
            },
            {
                title : "Prater",
                category : "Sport",
                summary : "The Prater is a large public park in Vienna's 2nd district. The Wurstelprater, an amusement park that is often simply called Prater, lies in one corner of the Wiener Prater and includes the Wiener Riesenrad Ferris wheel.",
                address: "1020 Vienna, Austria",
                open: "Mon-Sun",
                hour: "10:00 - 22:00",
                price: 386,
                phone: "+43 1 7280516",
                email: "info@praterwien.com",
                images: "database_images/Prater.jpg",
                latitude: 48.216899, 
                longitude: 16.398235                       
                                
            },
            {     

                                
                title : "The Hofburg",
                category : "Art",
                summary : "The Hofburg is the former principal imperial palace of the Habsburg dynasty rulers and today serves as the official residence and workplace of the President of Austria. It is located in the center of Vienna and was built in the 13th century and expanded several times afterwards.",
                address: "Michaelerkuppel, 1010 Wien, Austria",
                open: "Mon-Sun",
                hour: "09:00 - 17:30",
                price: 875,
                phone: "+43 1 5337570",
                email: "info@hofburg-wien.at",
                images: "database_images/The Hofburg.jpg",
                latitude: 48.207826,
                longitude: 16.366777
            }
        ]
        
    });
    
   

 })
 

//rendering to the detail
router.get('/news', (req,res) =>{
    res.render("location/test",{
        viewTitle: "Detail Location",
        locationDetail: doc
    })
})

router.get('/detail/:location', (req,res) =>{    
    console.log(req.params.location);

    return;
    res.render("location/test",{
        viewTitle: "Detail Location",
        locationDetail: doc
    })
})

router.get('/detail/:id', (req,res) =>{
    console.log(req.params.id);
    // locationModel.findById(req.params.id, (err,doc)=>{
    //     if(!err)
    //     {
    //         res.render("location/detail",{
    //             viewTitle: "Detail Location",
    //             locationDetail: doc
    //         })
    //     }
    // })
})

module.exports = router;