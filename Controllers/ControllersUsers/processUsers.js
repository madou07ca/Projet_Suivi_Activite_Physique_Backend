var mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId;
var UsersModel  = require('../../Models/modelsUsers');



module.exports = {
	creerUser : (req , res) => {
	
		//if(Object.keys(req.body).length === 7) {
			//Attributs
			const { nom, prenom, username, password} = req.body;
			let user = new UsersModel({nom, prenom, username, password});
			//enregistrer ds la BDD
			user.save(err => {
				//Si une erreur est survenue lors de la sauvegarde, envoyez-la. Sinon, envoyez un message de confirmation
				err ? res.send(err) : res.json({message: 'Utilisateur ajouté!'});
			});	
		//} else{
		//	res.json({error: "Vérifier les champs requis: sport, douleurAvant, douleurApres."});
		//}
		
	},

	//Listes
	afficherListeUsers : (res, req)=> {
		 UsersModel.find((err, sport) => {
			err ? res.send(err) : res.json(sport);
		}); 
	}
 
};