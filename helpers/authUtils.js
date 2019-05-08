/* let auth = module.exports;



auth.checkAuth = function(req, res, next){

    console.info('Check Auth');



    // --- Base de donnees

    let mongoose = require('mongoose');



    // -- Recup Token Authorization

    let token = req.headers.authorization || req.query.authorization;



    mongoose.model('User').findOne({token : token}).then((user)=>{

        if(user){

            req.currentUser = user;

            next();

        }else{

            res.status(401).json({message : "Not Authorize"})

        }

    },(err)=>{

        res.status(400).json(err)

    });

}; */