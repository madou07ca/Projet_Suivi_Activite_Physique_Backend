//import {AsyncStorage} from 'react-native';
const processUsers = require('./processUsers');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require ('../../../Config')

module.exports = {

 /*   creerUser(req, res){
       processUsers.creerUser(req, res);
   }, */

   /*creerUser(req, res){
       const {nom,prenom,username,password} = req.body;
       //hash password 
			const hashedPassword = passwordHash.generate(password);
    processUsers.creerUser(nom,prenom,username,hashedPassword)
        .then((result)=>{
            res.status(200).json({"message" : "Utilisateur ajouté"})
        // res.status(200).json(result)
        })
    .catch((typeErr)=>{
    res.status(400).json(typeErr)
    })
   },*/

 creerUser(req, res){
  const user = {

    username: req.body.username,

    password: passwordHash.generate(req.body.password)

}
  //hash password 
 //const hashedPassword = passwordHash.generate(password);
    processUsers.creerUser(user)
    .then((result)=>{
        res.status(200).json({
          "message" : "Utilisateur ajouté",
          "id" : result._id})
    // res.status(200).json(result)
    })
    .catch((typeErr)=>{
      //res.status(400).json(typeErr)
      res.status(400).json({
          "message" : "Verifier les infos"
      })
      })
}, 

 loginUser(req, res){
  const user = {

    username: req.body.username,

    password: req.body.password

  }
  console.log("blabla")

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
    "message" : "Mot de passe / Mail Incorrect"
})
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