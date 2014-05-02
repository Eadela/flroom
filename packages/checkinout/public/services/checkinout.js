'use strict';

angular.module('mean.checkinout').factory('Checkinout', ['$resource', function($resource) {
	return $resource('checks/:userId', {
		userId:'@_id'
	}, {
		checkIn: {
			method: 'PUT'
		},
		checkOut: {
			method: 'POST'
		}
	});
}]);
