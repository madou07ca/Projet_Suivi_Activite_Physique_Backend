 const DOMAIN = "http://172.20.10.3:3030"; //Domain:port 
const API_URL = `${DOMAIN}/api/activite`;

//Headers for PUT and POST requests 
const fetchHeaders = {
	'Accept': 'application/json', 
  'Content-Type': 'application/json'
};

var Requests = {

	getRequest: () => {
		return fetch(API_URL).then(resp => resp.json());
	},
	postRequest: (newActivites) => {
		const activitesJSON = JSON.stringify(newActivites);
		//Define method, headers and body to send to the server
		const params = {
			method: 'POST',
			headers: fetchHeaders,
			body: activitesJSON
		};
		return fetch(API_URL, params).then(resp => resp.json());
	}

};

export default Requests; 

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