//*********Modules*************/
const sportModel  = require('../../Models/modelsSport');

//*******************************/

module.exports = {
//===========Cette methode permet d'ajouter un sport ds la BDD=============
//=========================================================================
	creerSport : (name, userId) => {
			return new Promise((resolve , reject)=>{
				let sport = new sportModel({name , userId});
				sport.save().then(()=> {
					resolve(sport)
				},(err)=>{
					reject(err)
				})
			})	
	},
//=========================================================================

//===========Cette methode affiche la liste des sports====================
//=========================================================================
	afficherListeSport : (userId)=> 
	{
		return new Promise((resolve,reject)=>{
			sportModel.find({userId : userId},(err, sport) => {
				if (err){
					reject("error")
				}		
				resolve(sport);
			});
		}) 
	}
//=================================FIN de la methode=================================
 
};