const express = require('express');
const bodyParser = require('body-parser');
const actionActivite = require ('./actionActivite');


const router = express.Router();

//const port = 3030; //Port

//const activite_process = require('./processActivite');

router.use(bodyParser.json());


//Creer une activite (POST)
router.route('/activite').post((req, res) => {
    actionActivite.creerActivite(req , res);
	
});
//GET 
router.route('/activite/:userId').get((req, res) => {
	actionActivite.afficherListeActivite(req , res);
});

//UPDATE
router.route('/Activite/:ActiviteID').put((req, res) => {
	actionActivite.modifierActivite(req,res);
})
//DELETE
.delete((req,res) => {
	actionActivite.supprimerActivite(req,res);
});

module.exports = router;