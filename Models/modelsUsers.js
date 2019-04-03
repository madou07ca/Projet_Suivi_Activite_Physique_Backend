const mongoose = require('mongoose'); //Library for MongoDB


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
	}
});

module.exports = Users;