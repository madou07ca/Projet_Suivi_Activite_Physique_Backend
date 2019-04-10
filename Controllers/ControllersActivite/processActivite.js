var mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId;
var activiteModel  = require('../../Models/modelsActivite');



module.exports = {
	creerActivite : (req , res) => {
	
		if(Object.keys(req.body).length === 7) {
			//Date et heure
			var now = new Date();
			var mois = now.getMonth() + 1 ;
			var date = now.getDate() + "/" + mois + "/" + now.getFullYear() ;
			var heure = now.getHours() + ":" + now.getMinutes();
			//Attributs
			const {sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree} = req.body;
			
			//Créer un nouveau modèle d'activité
			let activite = new activiteModel({sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree, date , heure});
			//enregistrer ds la BDD
			activite.save(err => {
				//Si une erreur est survenue lors de la sauvegarde, envoyez-la. Sinon, envoyez un message de confirmation
				err ? res.send(err) : res.json({message: 'Activite crée!'});
			});	
		} else{
			res.json({error: "Vérifier les champs requis: sport, douleurAvant, douleurApres."});
		}
		
	},

	//Listes
	afficherListeActivite : (res, req)=> {
		 activiteModel.find((err, activite) => {
			err ? res.send(err) : res.json(activite);
		}); 

		/*activiteModel.find({}).then(activite => {
			res.send(activite);
		});*/
	},

	//Update
	modifierActivite : (res,req) =>{
		activiteModel.findOneAndUpdate({_id : req.params.ActiviteID},
			req.body,
			 (err) => {
		   if(err){
			   res.send(err);
		   }
   
		   res.json(activiteModel);
	   
	 });
	
	},

	//Delete
	supprimerActivite : (res,req) => {
		let id = req.params.ActiviteID;
	activiteModel.remove({_id: req.params.ActiviteID}, (err) => {
		err ? res.send(err) : res.json({message: 'Activité Supprimée'});
	})
	}
 
};






