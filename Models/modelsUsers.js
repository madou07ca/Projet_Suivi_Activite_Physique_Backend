const mongoose = require('mongoose'); //Library for MongoDB
const jwt = require('jwt-simple');
//const crypto      = require('crypto');

//Model
let Users = mongoose.model('Users', {
	nom: {
		type : String, 
		required : false
    },
    prenom: {
		type : String, 
		required : false
    },
    username: {
		type : String, 
		required : true
    },
    password: {
		type : String, 
		required : true
		},
})


Users.methods = {

	authentification: function (password) {

		return passwordHash.verify(password, this.password);

	},

	getToken: function () {

		return jwt.encode(this, config.secret);

	},
	getUtilisateur: function () {

		return this.password;

	}

}
module.exports = Users;