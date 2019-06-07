const mongoose = require('mongoose');
const moment = require('moment');
const activiteModel  = require('../../Models/modelsActivite');



module.exports = {
	/*creerActivite : (req , res) => {
	
		if(Object.keys(req.body).length === 7) {
			// Heure et Date
			const heure = new moment().format('HH') + ":" + new moment().format('mm');
			const date = new moment().format('DD') + "/" + new moment().format('MM') + "/" + new moment().format('YYYY');
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
		
	},*/
	creerActivite : (sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree, date , heure, userId) => {
			//Créer un nouveau modèle d'activité
			let activite = new activiteModel({sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree, date , heure,userId});
			//enregistrer ds la BDD
			activite.save(err => {
				//Si une erreur est survenue lors de la sauvegarde, envoyez-la. Sinon, envoyez un message de confirmation
				//err ? res.send(err) : res.json({message: 'Activite crée!'});
				if (err){
					console.log ("error",err)
				}
				console.log("activité crée");
					//return activite;
			});	
		 
		
	},

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

	//Update
	/* modifierActivite : (req,res) =>{
		activiteModel.findOneAndUpdate({_id : req.params.ActiviteID},
			req.body,
			 (err) => {
		   if(err){
			   res.send(err);
		   }
   
		   res.json(activiteModel);
	   
	 });
	const  code  = req.params.ActiviteID
	 console.log(code);
	
	 },*/
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

	//Delete
/*	supprimerActivite : (res,req) => {
		let id = req.params.ActiviteID;
	activiteModel.remove({_id: req.params.ActiviteID}, (err) => {
		err ? res.send(err) : res.json({message: 'Activité Supprimée'});
	})
	}*/
	supprimerActivite : (id) => {
	activiteModel.remove({_id: id}, (err) => {
		if (err){
			return err;
		}

	   return activiteModel;
	})
	}
 
};






