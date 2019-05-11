const express = require('express');
const bodyParser = require('body-parser');
const actionUsers = require ('./actionUsers');


const router = express.Router();


router.use(bodyParser.json());


//Creer un user (POST)
router.route('/users').post((req, res) => {
    actionUsers.creerUser(req,res);
	
})
//GET 
.get((req, res) => {
	actionUsers.afficherListeUsers(req , res);
});

module.exports = router;
