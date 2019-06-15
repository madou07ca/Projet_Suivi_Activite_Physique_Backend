//********** */
const processSport = require('./processSport');

module.exports = {
//===========Cette methode permet d'ajouter un sport====================
//======================================================================
    creerSport(req, res){
      const { name, userId} = req.body; 
      processSport.creerSport(name, userId)
        .then((result)=>{
             res.status(200).json({"message" : "sport ajouté"})
           // res.status(200).json(result)
        })
      .catch((typeErr)=>{
        res.status(400).json(typeErr)
      })
   }, 
//=================================FIN de la methode=======================

//===========Cette methode affiche la liste des sports====================
//=========================================================================
   afficherListeSport(req, res){
    const userId = req.params.userId;
       processSport.afficherListeSport(userId)
       .then((result)=>{
        res.status(200).json(result)
    })
    .catch((typeErr)=>{
        res.status(400).json(typeErr)
    })
   }
//=================================FIN de la methode=================================

};