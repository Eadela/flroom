'use strict';

angular.module('mean').controller('CheckinoutController', ['$scope', 'Global',
    function($scope, Global, Checkinout) {
        $scope.global = Global;
        $scope.checkinout = {
            name: 'checkinout'
        };
    }
]);
