'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var checkinoutSchema = new Schema({
  username: {
    type: String
  },
  working: {
    type: Boolean,
    default: false
  },
  recordId: {
    type: String
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

mongoose.model('CheckPeopels', checkinoutSchema);
