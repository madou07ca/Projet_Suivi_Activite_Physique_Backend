const express = require('express');
const mongoose = require('mongoose');

const app = express();


// --- middleware

// - body-parser needed to catch and to treat information inside req.body

let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

let database  = mongoose.connect("mongodb://localhost/demo",{

    promiseLibrary: require('bluebird'),

    useNewUrlParser: true

});

app.get('/', (req,res)=> {
   res.send('salut!!!') 
})

console.log('Waouh');
app.listen(3000);