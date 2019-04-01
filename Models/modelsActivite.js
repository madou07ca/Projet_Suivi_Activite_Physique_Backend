const mongoose = require('mongoose'); //Library for MongoDB
//BDD locale
//const db = require ('./../DB')
//mongoose.connect('db', {useNewUrlParser: true});
//mongoose.connect('mongodb://localhost:27017/projet', {useNewUrlParser: true});

//Model
const Activite = mongoose.model('Activite', {
	sport: {
		type : String, 
		required : true
	},
	douleurAvant: {
		type : String,
		required : true
	},
	douleurApres: {
		type : String, 
		required : true
	},
	zoneDouleurAvant : {
		type : String, 
		required : true
	},
	zoneDouleurApres : {
		type : String, 
		required : true
	},
	nbKilometre : {
		type : String, 
		required : true
	},
	duree : {
		type : String, 
		required : true
	},
	date : {
		type : String, 
		required : true
	},
	heure : {
		type : String, 
		required : true
	}
});

module.exports = Activite;