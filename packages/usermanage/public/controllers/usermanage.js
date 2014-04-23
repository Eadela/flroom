'use strict';

angular.module('mean').controller('UsermanageController', ['$scope', 'Global',
    function($scope, Global, Usermanage) {
        $scope.global = Global;
        $scope.usermanage = {
            name: 'usermanage'
        };
    }
]);
