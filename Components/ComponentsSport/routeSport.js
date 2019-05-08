var express = require('express');
var bodyParser = require('body-parser');
var actionSport = require ('./actionSport');


var router = express.Router();


router.use(bodyParser.json());


//Creer une activite (POST)
router.route('/sport').post((req, res) => {
    actionSport.creerSport(req,res);
	
})
//GET 
.get((req, res) => {
	actionSport.afficherListeSport(req,res);
});

module.exports = router;
