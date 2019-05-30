const mongoose = require('mongoose');
const Users  = require('../../Models/modelsUsers');
const passwordHash = require('password-hash');




module.exports = {
	/* creerUser : (req, res) => {
	
		//if(Object.keys(req.body).length === 7) {
			//Attributs
            //const {nom, prenom, username, password} = req.body;
			let user = new Users({
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
		
	}, */
	/*creerUser : (nom,prenom,username,password) => {
		return new Promise((resolve , reject)=>{
			//-----Attributs
			let user = new Users({nom,prenom,username,password});
			//enregistrer ds la BDD
			user.save().then(()=> {
				resolve(user)
			},(err)=>{
				reject(err)
			})
		});	
		
	},*/


	/********************************************************************************************* */
	 creerUser : (users) => {
		return new Promise(function (resolve, reject) {

		Users.findOne({ 

			username: users.username

		}, function (err, result) {

			if (err) {

				reject(err);

			} else
			
			{   if(result){
				reject(result);
			}else{
				let user = new Users(users);
				//enregistrer ds la BDD
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

 loginUser : (user) => {
	return new Promise(function (resolve, reject) {
		Users.findOne({ 

			username: user.username

		}, function (err, result) {
			if (err){
				reject(err);
			}else{
				if(passwordHash.verify(user.password, result.password)){
					console.log("ressi");
					console.log(result)
					resolve(result)
					}
					
				}

		})
	})
			

}, 

	 /*  creerUser : (user) => {
		return new Promise(function (resolve, reject) {
 
		Users.findOne({ 

			username: Users.username

		}, function (err, result) {

			if (err) {

				reject(500);

			} else {

				if (result) {

					reject(204)

				} else {

					resolve(true)

				}

			}

		})

	}).then(function () {

		var _u = new Users({user});

		_u.save(function (err, user) {

			if (err) {

				res.status(500).json({

					"text": "Erreur interne"
					

				})
				console.log(err)

			} else {

				res.status(200).json({

					"text": "Succès",

					"token": user.getToken(),

				})
				console.log("succès")

			}

		})

	}, function (error) {

		switch (error) {

			case 500:

				res.status(500).json({

					"text": "Erreur interne"

				})
				console.log("succès")

				break;

			case 204:

				res.status(204).json({

					"text": "L'adresse email existe déjà"

				})
				console.log("L'adresse email existe déjà")

				break;

			default:

				res.status(500).json({

					"text": "Erreur interne"

				})
				console.log("erreur interne")

		}

	});
},  */

	/********************************************************************************************* */
	//Listes
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
 
};
