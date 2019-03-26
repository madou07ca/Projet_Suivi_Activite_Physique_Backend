var express = require('express');
var bodyParser = require('body-parser');
var activiteModel  = require('../../Models/modelsActivite');
//D:\Projet_S_A_P\Dossier_backup\Projet_Suivi_Activite_Physique-echappe-front\Models\modelsActivite.js


var app = express();

const port = 3030; //Port

//Configurez l'application pour utiliser bodyParser et nous permettre à faire POST et PUT
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//API Routes
var router = express.Router();

//Middleware à utiliser pour toutes les requetes
router.use((rep, res, next) => {
	console.log("une Requete a été envoyé!");
	next();
});

//Testing route
router.get('/', (req, res) =>{
  res.json({message: "projet HelpHealther."});
});

//Creer une activite (POST)
router.route('/activite').post((req, res) => {
	
	if(Object.keys(req.body).length === 7) {
		//Date et heure
		var now = new Date();
		var date = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() ;
		var heure = now.getHours() + ":" + now.getMinutes();
		//Attributs
		const {sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree} = req.body;
		//Créer un nouveau modèle d'activité
		var activite = new activiteModel({sport, douleurAvant, douleurApres,zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree,date, heure});
		//enregistrer ds la BDD
		activite.save(err => {
			//Si une erreur est survenue lors de la sauvegarde, envoyez-la. Sinon, envoyez un message de confirmation
			err ? res.send(err) : res.json({message: 'Activite crée!'});
		});	
	} else{
		res.json({error: "Vérifier les champs requis: sport, douleurAvant, douleurApres."});
	}
	
})
//GET 
.get((req, res) => {
	//Renvoyer les infos à partir de la BDD
	activiteModel.find((err, activite) => {
		err ? res.send(err) : res.json(activite);
	});
});

//=================Reprendre ici=========================
//UPDATE
router.route('/Activite/:ActiviteID').put((req, res) => {
	//Methode find sur l'iD
	//let id = req.params.activiteID
	activiteModel.findOneAndUpdate({_id : req.params.ActiviteID},
		 req.body,
		  (err) => {
		if(err){
			res.send(err);
		}

		res.json(activiteModel);
		/* //Enregistrer ds la BDD
		 const {sport, douleurAvant, douleurApres} = req.body;
		//------------------voir----------------
		//var activites = new activiteModel({sport, douleurAvant, douleurApres});
		activite.sport = sport;
		activite.douleurAvant = douleurAvant;
		activite.douleurApres = douleurApres;        
		activite.save(err => { 
			err ? res.send(err) : res.json({message: 'MAJ' + req.params.ActiviteID});
			//console.log(id);
		}); */
	});
})
//DELETE
.delete((req,res) => {
	let id = req.params.ActiviteID;
	activiteModel.remove({_id: req.params.ActiviteID}, (err) => {
		err ? res.send(err) : res.json({message: 'Activité Supprimée'});
	})
});
//Register routes
app.use('/api', router);



app.listen(port);
//Console.log("Le serveur écoute sur le port:" + port);






//---------------------------------Test Structure (Action-Process-Routes)-------------------------------
/* var activiteModel  = require('./modelsActivite');

router.get('/', (req, res) =>{
	res.json({message: "projet HelpHealther."});
  });

  //GET 
exports.listeActivites((req, res) => {
	//Renvoyer les infos à partir de la BDD
	activiteModel.find((err, activite) => {
		err ? res.send(err) : res.json(activite);
	});
});

  exports.createActivite((req, res) => {
	
	if(Object.keys(req.body).length === 7) {
		//Date et heure
		var now = new Date();
		var date = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() ;
		var heure = now.getHours() + ":" + now.getMinutes();
		//Attributs
		const {sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree} = req.body;
		//Créer un nouveau modèle d'activité
		var activite = new activiteModel({sport, douleurAvant, douleurApres,zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree,date, heure});
		//enregistrer ds la BDD
		activite.save(err => {
			//Si une erreur est survenue lors de la sauvegarde, envoyez-la. Sinon, envoyez un message de confirmation
			err ? res.send(err) : res.json({message: 'Activite crée!'});
		});	
	} else{
		res.json({error: "Vérifier les champs requis: sport, douleurAvant, douleurApres."});
	}
	
});

//UPDATE
exports.activiteUpdate((req, res) => {
	//Methode find sur l'iD
	//let id = req.params.activiteID
	activiteModel.findOne({_id : req.params.ActiviteID}, (err) => {
		if(err){
			res.send(err);
		}
		//Enregistrer ds la BDD
		const {sport, douleurAvant, douleurApres} = req.body;
		//------------------voir----------------
		//var activites = new activiteModel({sport, douleurAvant, douleurApres});
		activite.sport = sport;
		activite.douleurAvant = douleurAvant;
		activite.douleurApres = douleurApres;        
		activite.save(err => {
			err ? res.send(err) : res.json({message: 'MAJ' + req.params.ActiviteID});
			//console.log(id);
		});
	});
});

//DELETE
exports.activiteDelete((req,res) => {
	let id = req.params.ActiviteID;
	activiteModel.remove({_id: req.params.ActiviteID}, (err) => {
		err ? res.send(err) : res.json({message: 'Activité Supprimée'});
		//err ? res.send(err) : res.json({message: '' + id});
	})
}); */