const DOMAIN = "http://172.20.10.3:3030"; //Domain:port 
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
	}

};

export default Requests;