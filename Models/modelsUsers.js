const mongoose = require('mongoose'); //Library for MongoDB

//const crypto      = require('crypto');

//Model
const Users = mongoose.model('Users', {
	nom: {
		type : String, 
		required : true
    },
    prenom: {
		type : String, 
		required : true
    },
    username: {
		type : String, 
		required : true
    },
    password: {
		type : String, 
		required : true
		},
		/* token: {
			type : String, 
			required : true 
	}*/
});

//----------------

/* Users.methods.generateToken = function(){

	return new Promise((resolve, reject) =>{

			// ---- algo

			this.token = Date.now();

			this.save().then(()=>{

					resolve({

							id : this.id,

							nom : this.nom,
							prenom : this.prenom,

							token : this.token

					})

			},(err)=>{

					reject(err)

			})

	})

}; */
module.exports = Users;