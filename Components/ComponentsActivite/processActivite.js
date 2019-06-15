const mongoose = require('mongoose');
const moment = require('moment');
const activiteModel  = require('../../Models/modelsActivite');



module.exports = {
/******************************************************************************************** */
	creerActivite : (sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree, date , heure, userId) => {
			//Créer un nouveau modèle d'activité
			let activite = new activiteModel({sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree, date , heure,userId});
			//enregistrer ds la BDD
			activite.save(err => {
				//Si une erreur est survenue lors de la sauvegarde, envoyez-la. Sinon, envoyez un message de confirmation
				if (err){
					console.log ("error",err)
				}
				console.log("activité crée");
					//return activite;
			});	
		 
		
	},
/********************************************************************************************* */

/*********************************************************************************************** */
	//Listes Activites
	afficherListeActivite : (id)=> {
		return new Promise((resolve,reject)=>{
			activiteModel.find({userId : id},(err, activite) => {
				if (err){
					reject("error")
				}		
				resolve(activite);
			});			
		})
	},
/***************************************************************************************** */
	 modifierActivite : (id,body) =>{
		activiteModel.findOneAndUpdate({_id : id},


			body,
			  (err) => {
		   if(err){
			  return err;
		   }
   
		  return activiteModel; 
		  // console.log(activiteModel)
	   
	 });
	
	}, 
/******************************************************************************************** */

/***************************************************************************************** */
	supprimerActivite : (id) => {
	activiteModel.remove({_id: id}, (err) => {
		if (err){
			return err;
		}

	   return activiteModel;
	})
	}
/*************************************FIN*************************************************** */ 
};






