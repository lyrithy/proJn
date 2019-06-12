const express = require('express');
var router = express.Router();

function urlOpen(url){
    
    console.log("clicked");
    newurl='location/'+url;
    text='/'+url;
    router.get(text, (req,res) =>{
        res.render(newurl,
        {
            viewTitle: "Search attractive places"
        });
    })
}