//Modules

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//mongoose.connect('mongodb://localhost:27017/projet');

mongoose.connect('mongodb://localhost:27017/projet', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Configurez l'application pour utiliser bodyParser et nous permettre à faire POST et PUT
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());


var activite = require('./Models/modelsActivite');
var sport = require('./Models/modelsSport');
var sport = require('./Models/modelsUsers');


//Routes
app.use('/', require('./Controllers/ControllersActivite/routeActivite'))
app.use('/', require('./Controllers/ControllersSport/routeSport'))
app.use('/', require('./Controllers/ControllersUsers/routeUsers'))


app.listen(3030);