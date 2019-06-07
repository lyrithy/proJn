const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const locationModel = mongoose.model('locations');


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

   
    
    locationModel.find({"city":req.body.city}, function(err, data){
        
        if(err){
            console.log(err);
            return
        }
    
        if(data.length == 0) {
            console.log("No record found")
            return
        }
        var list=[];
        for (var i in data){
            for (var j in data[i].places)
                if(data[i].places[j].price<=req.body.price){
                    var temp={city:data[i].city, title:data[i].places[j].title, 
                        category:data[i].places[j].category, price:data[i].places[j].price,
                        viewTitle:data[i].places[j].summary}
                    list.push(temp)
                    //console.log(data[i].places[j])
                }

                
                
                
        }
        
        res.render("location/list",{list:list})
        
        
    })

  
 


    // locationModel.find(        
    //     {   
    //         places : { $elemMatch : { category:'Sport' } } 
            
        
    //     } ,
    //     function(err,docs)
    //     {
    //         console.log(docs.length + " ================== " +  req.body.price);
    //         for (var i = 0, len = docs.length; i < len; i++) {
    //             console.log(docs[i]);
    //         }
    //     }
    //   );
    
})

function getData(req,res){
    //console.log("-------" + req.body.country + req.body.city + req.body.price);    

    //locaitonCollection.find({"city":"Brno"});


}

router.get('/list', (req,res) =>{
    //console.log("-------" + req.body);
    res.json('sample text from router locaitons');
 })
 

//rendering to the detail
 router.get('/:id', (req,res) =>{
    console.log(req.params.id);
    locationModel.findById(req.params.id, (err,doc)=>{
        if(!err)
        {
            
        }
    })
})
module.exports = router;