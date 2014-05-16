'use strict';

//Articles service used for articles REST endpoint
angular.module('mean').factory('Workflow', ['$resource',
	function($resource) {
		return $resource('workflow');
	}
]);
