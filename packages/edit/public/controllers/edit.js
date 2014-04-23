'use strict';

angular.module('mean').controller('EditController', ['$scope', 'Global',
    function($scope, Global, Edit) {
        $scope.global = Global;
        $scope.edit = {
            name: 'edit'
        };
    }
]);
