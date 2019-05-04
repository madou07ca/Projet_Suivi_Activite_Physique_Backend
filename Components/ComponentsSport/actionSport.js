const processSport = require('./processSport');

module.exports = {

   creerSport(req, res){
       processSport.creerSport(res, req);
   },

   afficherListeSport(req, res){
       processSport.afficherListeSport()
       .then((result)=>{
        res.status(200).json(result)
    })
    .catch((typeErr)=>{
        res.status(400).json(typeErr)
    })
   }

};