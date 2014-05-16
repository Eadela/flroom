'use strict';

require('../models/checkPeopels');
require('../models/checkRecords');

var mongoose = require('mongoose'),
    CheckPeopels = mongoose.model('CheckPeopels'),
    CheckRecords = mongoose.model('CheckRecords');
   /* _ = require('lodash');*/

exports.get = function(req, res) {
    var username = req.params.username;
    CheckPeopels.search(username, function(err, checkPeopel) {
        if (!checkPeopel) {
            var checkNewPeopel = new CheckPeopels({
                username: username
            });
            checkNewPeopel.save(function(err, checkPeopel) {
                res.jsonp(checkPeopel);
            });
        } else {
            res.jsonp(checkPeopel);
        }
    });
};

exports.create = function(req, res) {
    var checkNewRecord = new CheckRecords(req.body);
    checkNewRecord.save(function(err, checkRecord) {
        CheckPeopels.findOneAndUpdate(checkRecord.username, {
            working: true,
            recordId: checkRecord._id
        }, function(err, checkPeopel) {
            res.jsonp(checkPeopel);
        });
    });
};

exports.update = function(req, res) {
    var username = req.username;
    CheckPeopels.findOneAndUpdate(username, {
        working: false
    }, function(err, returnPeopel) {
        var q ={_id:returnPeopel.recordId};
        CheckRecords.findOneAndUpdate(q, {
            checkoutTime: new Date().getTime()
        }, function(err, result) {
            res.jsonp(result);
        });
    });
};

exports.fetch = function(req, res) {
    var username = req.params.username;
    CheckRecords.find({username: username}).sort('-checkinTime').exec(function(err, checkRecords) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(checkRecords);
        }
    });
};
