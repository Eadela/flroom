'use strict';

angular.module('mean').controller('CheckinoutController', ['$scope', 'Global', 'Checkinout',
    function($scope, Global, Checkinout) {
        $scope.global = Global;

        $scope.checkStatus = '';
        $scope.fetch = function() {
        	Checkinout.get({
        		username: window.user.username
        	}, function(status){
        		$scope.checkStatus = status;
        	});
        }
    }
]);
