const processUsers = require('./processUsers');

module.exports = {

 /*   creerUser(req, res){
       processUsers.creerUser(req, res);
   }, */

   creerUser(req, res){
       const {nom,prenom,username,password} = req.body;
    processUsers.creerUser(nom,prenom,username,password)
        .then((result)=>{
            res.status(200).json({"message" : "Utilisateur ajouté"})
        // res.status(200).json(result)
        })
    .catch((typeErr)=>{
    res.status(400).json(typeErr)
    })
},



   creerSport(req, res){
    // processSport.creerSport(res, req);
    const name = req.body.name;
    processSport.creerSport(name)
      .then((result)=>{
           res.status(200).json({"message" : "sport ajouté"})
         // res.status(200).json(result)
      })
    .catch((typeErr)=>{
      res.status(400).json(typeErr)
    })
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