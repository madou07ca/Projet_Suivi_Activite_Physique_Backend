var express = require('express');
var bodyParser = require('body-parser');
var actionUsers = require ('./actionUsers');


var router = express.Router();


router.use(bodyParser.json());


//Creer une activite (POST)
router.route('/users').post((req, res) => {
    actionUsers.creerUser(res,req);
	
})
//GET 
.get((req, res) => {
	actionUsers.afficherListeUser(res,req);
});

module.exports = router;
