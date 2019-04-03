var mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId;
var sportModel  = require('../../Models/modelsSport');



module.exports = {
	creerSport : (req , res) => {
	
		//if(Object.keys(req.body).length === 7) {
			//Attributs
			const {name} = req.body;
			let sport = new sportModel({name});
			//enregistrer ds la BDD
			sport.save(err => {
				//Si une erreur est survenue lors de la sauvegarde, envoyez-la. Sinon, envoyez un message de confirmation
				err ? res.send(err) : res.json({message: 'Sport ajouté!'});
			});	
		//} else{
		//	res.json({error: "Vérifier les champs requis: sport, douleurAvant, douleurApres."});
		//}
		
	},

	//Listes
	afficherListeSport : (res, req)=> {
		 sportModel.find((err, sport) => {
			err ? res.send(err) : res.json(sport);
		}); 
	}
 
};