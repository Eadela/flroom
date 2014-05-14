'use strict';

require('../models/checkPeopels');
require('../models/checkRecords');

var mongoose = require('mongoose'),
    CheckPeopels = mongoose.model('CheckPeopels'),
    CheckRecords = mongoose.model('CheckRecords'),
    _ = require('lodash');

exports.get = function(req, res) {
    var username = req.params.username;
    CheckPeopels.search(username, function(err, checkPeopel) {
        if (!checkPeopel) {
            var checkNewPeopel = new CheckPeopels({
                username: username
            });
            checkNewPeopel.save(function(resoult) {
                res.jsonp(resoult);
            });
        } else {
            res.jsonp(checkPeopel);
        }
    });
};

exports.create = function(req, res) {
    var checkoutTime = new Date().getTime();
    var checkNewRecord = new CheckRecords(_.extend({
        checkoutTime: checkoutTime
    }, req.body));
    checkNewRecord.save(function(err, checkRecord) {
        var checkInTime = checkRecord.checkinTime;
        CheckPeopels.findOneAndUpdate(checkRecord.username, {
            working: true,
            recordId: checkRecord._id
        }, function(checkPeopel) {
            var checkInformation = _.extend(checkPeopel, {
                checkInTime: checkInTime
            });
            res.jsonp(checkInformation);
        });
    });
};

exports.update = function(req, res) {
    var username = req.username;
    CheckPeopels.findOneAndUpdate(username, {
        working: false
    }, function(err, checkPeopel) {
        CheckRecords.findOneAndUpdate(checkPeopel.recordId, {
            checkoutTime: new Date().getTime()
        }, function(result) {
            res.jsonp(result);
        });
    });
};

exports.fetch = function(req, res) {
    var username = req.params.username;
    CheckRecords.find(username).sort('checkinTime').exec(function(err, checkRecords) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(checkRecords);
        }
    })
};
