const processUsers = require('./processUsers');

module.exports = {

   creerUser(req, res){
       processUsers.creerUser(req, res);
   },

   afficherListeUsers(req, res){
        processUsers.afficherListeUsers()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((typeErr)=>{
            res.status(400).json(typeErr)
        })
   }
   

  
};