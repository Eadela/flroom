'use strict';

angular.module('mean.system').directive('meanUser', ['Global', 'Users',
	function(Global, Users) {
		return {
			restrict: 'A',
			templateUrl: '',
			scope: {
				meanUser: '=',
				l: '='
			},
			replace: false,
			link: function(scope, elem, attrs) {
				scope.global = Global;

				scope.$watch('l', function() {
					if (scope.l)
						scope.lang = scope.l;
				});

				scope.$watch('meanUser', function() {

				});

				scope.save = function() {

				}
			}
		};
	}
]);