'use strict';

angular.module('mean').controller('ManageController', ['$scope', 'Global',
    function($scope, Global, Manage) {
        $scope.global = Global;
        $scope.manage = {
            name: 'manage'
        };
    }
]);
