'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
    function($scope, Global) {
        $scope.global = Global;
        $scope.news = [{
            title: '1',
            content: 'abc'
        }, {
            title: '2',
            content: 'abc'
        }, {
            title: '3',
            content: 'abc'
        }, {
            title: '4',
            content: 'abc'
        }];
    }
]);
