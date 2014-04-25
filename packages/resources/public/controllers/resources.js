'use strict';

angular.module('mean').controller('ResourcesController', ['$scope', 'Global',
    function($scope, Global, Resources) {
        $scope.global = Global;
        $scope.resources = {
            name: 'resources'
        };
    }
]);
