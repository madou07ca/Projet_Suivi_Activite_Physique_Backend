const processSport = require('./processSport');

module.exports = {

    creerSport(req, res){
      // processSport.creerSport(res, req);
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

};