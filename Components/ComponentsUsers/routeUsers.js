var express = require('express');
var bodyParser = require('body-parser');
var actionUsers = require ('./actionUsers');


var router = express.Router();


router.use(bodyParser.json());


//Creer un user (POST)
router.route('/users').post((req, res) => {
    actionUsers.creerUser(res,req);
	
})
//GET 
.get((req, res) => {
	actionUsers.afficherListeUsers(req , res);
});

module.exports = router;
