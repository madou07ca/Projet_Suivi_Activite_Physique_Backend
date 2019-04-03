var express = require('express');
var bodyParser = require('body-parser');
var actionSport = require ('./actionSport');


var router = express.Router();


router.use(bodyParser.json());


//Creer une activite (POST)
router.route('/sport').post((req, res) => {
    actionSport.creerSport(res,req);
	
})
//GET 
.get((req, res) => {
	actionSport.afficherListeSport(res,req);
});

module.exports = router;
