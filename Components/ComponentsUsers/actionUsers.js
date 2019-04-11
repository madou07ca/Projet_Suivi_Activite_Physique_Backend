const processUsers = require('./processUsers');

module.exports = {

   creerUser(req, res){
       processUsers.creerUser(req, res);
   },

   afficherListeUsers(res, req){
       processUsers.afficherListeUsers(res, req);
   }
};