'use strict';

angular.module('mean').controller('ComputersController', ['$scope', 'Global',
    function($scope, Global, Computers) {
        $scope.global = Global;
        $scope.computers = {
            name: 'computers'
        };
    }
]);
