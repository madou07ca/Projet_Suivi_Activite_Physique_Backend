const processUsers = require('./processUsers');
const passwordHash = require('password-hash');

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
        res.status(200).json({"message" : "Utilisateur ajouté"})
    // res.status(200).json(result)
    })
    .catch((typeErr)=>{
    res.status(400).json(typeErr)
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
       res.status(200).json({"message" : "Authentification réussi"})
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