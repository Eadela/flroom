'use strict';

angular.module('mean.system').filter('meanUsersToArray', function() {
	return function(input) {
		var out = [];
		for (var i in input) {
			out.push(input[i]);
		}
		return out;
	}
});
