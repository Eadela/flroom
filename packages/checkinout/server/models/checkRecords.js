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


mongoose.model('CheckRecords', checkinoutSchema);
