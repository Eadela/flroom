'use strict';

angular.module('mean').controller('SchedulingController', ['$scope', 'Global', '$http',
    function($scope, Global, $http) {
        $scope.global = Global;
        $scope.abs = 'bbc';
        $scope.popover = {
            'title': ' ',
            'content': ' '
        };
        $scope.d3w6 = {
        	className: 'abc',
        	startWeek: '12',
        	endWeek: '15'
        };
    }
]);
