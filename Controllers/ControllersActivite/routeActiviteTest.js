var express = require('express');
var bodyParser = require('body-parser');
//var activiteModel  = require('./modelsActivite');
//D:\Projet_S_A_P\Dossier_backup\Projet_Suivi_Activite_Physique-echappe-front\Models\modelsActivite.js


var router = express.Router();

//const port = 3030; //Port

const activite_process = require('./processActivite');


router.get('/', activite_process);

//Post
router.post('/newActivite', activite_process.createActivite);

//get en fonction de l'id
router.get('/Activite/:ActiviteID', activite_process.activiteDetails);

//get listes des activités
router.get('/Activite', activite_process.listeActivites);

//update
router.put('/Activite/:ActiviteID', activite_process.activiteUpdate);


//Delete
router.delete('/Activite/:ActiviteID', activite_process.activiteDelete);




module.exports = router;