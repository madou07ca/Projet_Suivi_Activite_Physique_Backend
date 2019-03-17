const mongoose = require('mongoose'); //Library for MongoDB
//BDD locale
mongoose.connect('mongodb://localhost:27017/projet', {useNewUrlParser: true});

//Model
const Activite = mongoose.model('Activite', {
	sport: String,
	douleurAvant: String,
	douleurApres: String,
	zoneDouleurAvant : String,
	zoneDouleurApres : String,
	nbKilometre : String,
	duree : String,
	date : String,
	heure : String
});

module.exports = Activite;