//********Modules************/
const processUsers = require('./processUsers');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require ('../../Config')

//************************* */
module.exports = {
//===========Cette methode permet d'ajouter un utlisateur ds la BDD========
//=========================================================================
 creerUser(req, res){
  const user = {
        username: req.body.username,
        password: passwordHash.generate(req.body.password)
    }
    processUsers.creerUser(user)
    .then((result)=>{
            res.status(200).json({
            "message" : "Utilisateur ajouté"
            })
        // res.status(200).json(result)
    })
    .catch((typeErr)=>{
        //res.status(400).json(typeErr)
        res.status(400).json({
            "message" : "Verifier les infos"
        })
    })
}, 
//=================================FIN de la methode========================

//===========Cette methode permet à un utilisateur de se connecter=========
//=========================================================================
 loginUser(req, res){
  const user = {
        username: req.body.username,
        password: req.body.password
    }

    processUsers.loginUser(user)
   .then((result)=>{
        let token = jwt.encode(result,config.secret);
      console.log("Identifiant", result._id)
       res.status(200).json({
           "message" : "Authentification réussi",
           "token" :token,
           "id" : result._id 
        }) 
       
   })
    .catch((typeErr)=>{
        //res.status(400).json(typeErr)
        res.status(400).json({
        "message" : typeErr
        })
    })
}, 

//=================================FIN de la methode=================================

//===========Cette methode permet d'afficher la liste des utilisateurs=====
//=========================================================================

   afficherListeUsers(req, res){
        processUsers.afficherListeUsers()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((typeErr)=>{
            res.status(400).json(typeErr)
        })
   }
//=================================FIN de la methode=================================   

  
};