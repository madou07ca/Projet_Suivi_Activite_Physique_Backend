const processSport = require('./processSport');

module.exports = {

   creerSport(req, res){
       processSport.creerSport(res, req);
   },

   afficherListeSport(res, req){
       processSport.afficherListeSport(res, req);
   }
};