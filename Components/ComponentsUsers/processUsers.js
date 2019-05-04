var mongoose = require('mongoose');
var UsersModel  = require('../../Models/modelsUsers');



module.exports = {
	creerUser : (res, req) => {
	
		//if(Object.keys(req.body).length === 7) {
			//Attributs
            //const {nom, prenom, username, password} = req.body;
			let user = new UsersModel({
                nom : req.body.nom, 
                prenom : req.body.prenom, 
                username : req.body.username, 
                password : req.body.password,
            });
			//enregistrer ds la BDD
			user.save(err => {
				//Si une erreur est survenue lors de la sauvegarde, envoyez-la. Sinon, envoyez un message de confirmation
				err ? res.send(err) : res.json({message: 'Utilisateur ajouté!'});
			});	
		
	},

	//Listes
		afficherListeUsers : ()=> {
			return new Promise((resolve,reject)=>{
			UsersModel.find((err, users) => {
				if (err){
					reject("error")
				}		
				resolve(users);
			});
		}) 
	}

 
};