var express = require('express');
var bodyParser = require('body-parser');
var actionActivite = require ('./actionActivite');


var router = express.Router();

//const port = 3030; //Port

//const activite_process = require('./processActivite');

router.use(bodyParser.json());


//Creer une activite (POST)
router.route('/activite').post((req, res) => {
    actionActivite.creerActivite(res,req);
	
})
//GET 
.get((req, res) => {
	actionActivite.afficherListeActivite(res,req);
});

//UPDATE
router.route('/Activite/:ActiviteID').put((req, res) => {
	actionActivite.modifierActivite(res,req);
})
//DELETE
.delete((req,res) => {
	actionActivite.supprimerActivite(res,req);
});

module.exports = router;


/* router.get('/', activite_process);

//Post
router.post('/newActivite', activite_process.createActivite);

//get en fonction de l'id
router.get('/Activite/:ActiviteID', activite_process.activiteDetails);

//get listes des activités
router.get('/Activite', activite_process.listeActivites);

//update
router.put('/Activite/:ActiviteID', activite_process.activiteUpdate);


//Delete
router.delete('/Activite/:ActiviteID', activite_process.activiteDelete); */




module.exports = router;