var mongoose = require('mongoose');
var sportModel  = require('../../Models/modelsSport');



module.exports = {
	/* creerSport : (req , res) => {
	
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
		
	}, */

	creerSport : (nomSport) => {
			return new Promise((resolve , reject)=>{
				//----
				let name = nomSport;
				let sport = new sportModel({name});
				sport.save().then(()=> {
					resolve(sport)
				},(err)=>{
					reject(err)
				})
			})	
	},

	//Listes
	afficherListeSport : ()=> {
			return new Promise((resolve,reject)=>{
			sportModel.find((err, sport) => {
				if (err){
					reject("error")
				}		
				resolve(sport);
			});
		}) 
	}
 
};