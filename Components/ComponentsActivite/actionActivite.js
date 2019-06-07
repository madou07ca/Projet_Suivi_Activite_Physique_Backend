const processActivite = require('./processActivite');
const moment = require('moment');
//import {AsyncStorage} from 'react-native';

module.exports = {

   creerActivite(req, res){
       // Heure et Date
       const heure = new moment().format('HH') + ":" + new moment().format('mm');
       const date = new moment().format('DD') + "/" + new moment().format('MM') + "/" + new moment().format('YYYY');
       //userId = "5555"
       //Attributs
       const {sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree, userId} = req.body;
       const newActivite = processActivite.creerActivite(sport, douleurAvant, douleurApres, zoneDouleurAvant, zoneDouleurApres, nbKilometre,duree,date , heure, userId);

       res.json({message: 'Activité Crée'})
   },

   afficherListeActivite(req, res){
    const userId = req.params.userId;
       processActivite.afficherListeActivite(userId)
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
