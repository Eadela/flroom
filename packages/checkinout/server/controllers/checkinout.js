'use strict';

require('../models/checkinout');

var mongoose = require('mongoose'),
	Checks = mongoose.model('Checks');

exports.fetch = function(req, res) {
	var username = req.username;
	Checks.search(username,function(err, check) {
		if(!check) {
			//create a new username 
			var checks = new Checks(req.body);
			checks.save(function(err,status) {
				if (err) {

				} else {
					res.jsonp(status);
				}
			})
		} else {
			res.jsonp(check);
		}
	})

}
exports.create = function(req, res) {

}
exports.update = function(req, res) {

}