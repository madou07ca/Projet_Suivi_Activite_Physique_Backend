//**********Module**********/
const Users  = require('../../Models/modelsUsers');
//passwordHash pour la hacher clé avant l'enregistrement
const passwordHash = require('password-hash');




module.exports = {
/******************************Creer un compte************************************************************ */
	 creerUser : (users) => {
		return new Promise(function (resolve, reject) {

		Users.findOne({ 

			username: users.username

		}, function (err, result) {

			if (err) {

				reject(err);

			} else
			
			{   if(result){
				console.log("cet utilisateur existe déjà!!!")
				reject(result);
			}else{
				let user = new Users(users);
				//enregistrer le user ds la BDD
				user.save().then(()=> {
					resolve(user)
				},(err)=>{
					reject(err)
				})
			}
				
		}
	})
	})
}, 

/*************************************FIN********************************************************** */

/******************************Connexion********************************************************** */
 loginUser : (user) => {
	return new Promise(function (resolve, reject) {
		Users.findOne({ 
			username: user.username,
			//password : user.password,
			}, function (err, result) {
				if (err){
					reject(err);
				}else{
						if(!result){
							console.log("Ce mail n'existe pas!!!")
							reject(result)
						} else{
							if(passwordHash.verify(user.password, result.password)){
								console.log("user.password", user.password);
								console.log("result.password",result.password)
								resolve(result)
								}
							else{
								reject(result);
								console.log("Mot de passe Incorect!!!")
								console.log("user.password", user.password);
								console.log("result.password",result.password)
							}

						}
						
				}

		})
	})			
},
/*************************************FIN************************************************************************** */

/******************************Afficher la liste des users********************************************************** */
		afficherListeUsers : ()=> {
			return new Promise((resolve,reject)=>{
			Users.find((err, users) => {
				if (err){
					reject("error")
				}		
				resolve(users);
			});
		}) 
	},
/*******************************************FIN*********************************************************************** */ 
};
