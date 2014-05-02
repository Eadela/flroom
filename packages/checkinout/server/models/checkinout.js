'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var checkinoutSchema = new Schema({
	userId: {
		type: String
	},
	checkinTime: {
		type: Date,
		default: Date.now
	},
	checkoutTime: {
		type: Date,
		default: Date.now
	},
	checkStatus: {
		type: String,
		default: 'no check'
	}
})

mongoose.model('Checks', checkinoutSchema);