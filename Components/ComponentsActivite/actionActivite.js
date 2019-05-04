const processActivite = require('./processActivite');
var moment = require('moment');

module.exports = {

   creerActivite(req, res){
       // Heure et Date
       var heure = new moment().format('HH') + ":" + new moment().format('mm');
       var date = new moment().format('DD') + "/" + new moment().format('MM') + "/" + new moment().format('YYYY');
       //Attributs
       const {sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree} = req.body;
       const newActivite = processActivite.creerActivite(sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree,date , heure);

       res.json({message: 'Activité Crée'})
   },

   afficherListeActivite(req, res){
       processActivite.afficherListeActivite()
       .then((result)=>{
           res.status(200).json(result)
       })
       .catch((typeErr)=>{
           res.status(400).json(typeErr)
       })
   },

   modifierActivite(req , res){
       const activiteID = req.params.ActiviteID;
       const activite = processActivite.modifierActivite(
           activiteID,
           req.body,
       );
       //res.send(activite);
       res.json(activite);
       console.log(activiteID);
   },

   supprimerActivite(req,res){
       const activiteID = req.params.ActiviteID;
       processActivite.supprimerActivite(activiteID);
       res.json({message: 'Activité Supprimée'})
       
   }


};
