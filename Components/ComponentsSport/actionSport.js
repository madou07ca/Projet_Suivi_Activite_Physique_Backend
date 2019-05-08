const processSport = require('./processSport');

module.exports = {

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