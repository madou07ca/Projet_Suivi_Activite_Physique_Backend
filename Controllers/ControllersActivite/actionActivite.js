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
 
 
 
 
 
 /* const DOMAIN = "http://172.20.10.3:3030"; //Domain:port 
const API_URL = `${DOMAIN}/api/activite`;

//Headers for PUT and POST requests 
const fetchHeaders = {
	'Accept': 'application/json', 
  'Content-Type': 'application/json'
};

var Requests = {

	getRequest: () => {
		return fetch(API_URL).then(resp => resp.json());
	},
	postRequest: (newActivites) => {
		const activitesJSON = JSON.stringify(newActivites);
		//Define method, headers and body to send to the server
		const params = {
			method: 'POST',
			headers: fetchHeaders,
			body: activitesJSON
		};
		return fetch(API_URL, params).then(resp => resp.json());
  },
  
   //Requete de mise à jour (update)
	putRequest: (activitesID, updatedActivites) => {
		//Build URL to request PUT
		const requestURL = `${API_URL}/${activitesID}`;
		//Convert data to JSON
		const activitesJSON = JSON.stringify(updatedActivites);
		//Define method, headers and body to send to the server
		const params = {
			method: 'PUT',
			headers: fetchHeaders,
			body: activitesJSON
		};
		return fetch(requestURL, params).then(resp => resp.json());
	},

	//DELETE: DELETE a activites in the database identified by its ID
	//Convert response to JSON the json will contain
	//A successful message or an error (debug)
	deleteRequest: (activitesID) => {
		//Build URL to request DELETE
		const requestURL = `${API_URL}/${activitesID}`;
		//Define method
		const params = {
			method: 'DELETE'
		};
		return fetch(requestURL, params).then(resp => resp.json());
	}


};

export default Requests;  */