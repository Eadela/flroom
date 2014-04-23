'use strict';

angular.module('mean').controller('ResolveController', ['$scope', 'Global',
    function($scope, Global, Resolve) {
        $scope.global = Global;
        $scope.resolve = {
            name: 'resolve'
        };
    }
]);
