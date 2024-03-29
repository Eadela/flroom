'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var scheduleRecordSchema = new Schema({
	className: {
		type: String
	},
	dateOfDay: {
		type: Number
	},
	dateOfWeek: {
		type: Number
	},
	endWeek: {
		type: Number
	},
	startWeek: {
		type: Number
	}
});

mongoose.model('ScheduleRecords', scheduleRecordSchema);