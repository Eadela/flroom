'use strict';

angular.module('mean').controller('StatisticsController', ['$scope', 'Global',
    function($scope, Global, Statistics) {
        $scope.global = Global;
        $scope.statistics = {
            name: 'statistics'
        };
    }
]);
