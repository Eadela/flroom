'use strict';

angular.module('mean').controller('SchedulingController', ['$scope', 'Global',
    function($scope, Global, Scheduling) {
        $scope.global = Global;
        $scope.scheduling = {
            name: 'scheduling'
        };
    }
]);
