const mongoose = require('mongoose'); //Library for MongoDB


//Model
const Sport = mongoose.model('Sport', {
	name: {
		type : String, 
		required : true
	}
});

module.exports = Sport;