'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var checkinoutSchema = new Schema({
  username: {
    type: String
  },
  checkinTime: {
    type: Date,
    default: Date.now
  },
  checkoutTime: {
    type: Date,
    default: Date.now
  }
});

/**
 * Statics
 */
checkinoutSchema.statics.search = function(username, cb) {
  this.findOne({
    username: username
  }).exec(cb);
};

mongoose.model('CheckRecords', checkinoutSchema);
