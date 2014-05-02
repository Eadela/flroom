'use strict';

angular.module('mean.checkinout').factory('Checkinout', ['$resource', function($resource) {
	return $resource('checks/:username', {
		username:'@_username'
	}, {
		checkIn: {
			method: 'PUT'
		},
		checkOut: {
			method: 'POST'
		}
	});
}]);
