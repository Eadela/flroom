'use strict';

angular.module('mean.checkinout').factory('Checkinout', ['$resource', function($resource) {
	return $resource('checks/:username', {
		username:'@username'
	}, {
		checkIn: {
			method: 'POST'
		},
		checkOut: {
			method: 'PUT'
		}
	});
}]);
