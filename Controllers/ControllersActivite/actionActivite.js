 const processActivite = require('./processActivite');

 module.exports = {

	creerActivite(req, res){
		processActivite.creerActivite(res, req);
	},

	afficherListeActivite(res, req){
		processActivite.afficherListeActivite(res, req);
	},

	modifierActivite(res, req){
		processActivite.modifierActivite(res, req);
	},

	supprimerActivite(res, req){
		processActivite.supprimerActivite(res,req);
	}


 };
 