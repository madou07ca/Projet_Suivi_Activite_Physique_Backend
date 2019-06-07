const express = require('express');
const bodyParser = require('body-parser');
const actionSport = require ('./actionSport');


const router = express.Router();


router.use(bodyParser.json());


//Creer une activite (POST)
router.route('/sport').post((req, res) => {
    actionSport.creerSport(req,res);
	
});
//GET 
router.route('/sport/:userId').get((req, res) => {
	actionSport.afficherListeSport(req,res);
});

module.exports = router;
